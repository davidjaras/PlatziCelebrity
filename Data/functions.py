import requests
import bs4
from common import config
import re

from names_search import find_name


is_well_formed_url = re.compile(r'^https?://.+/.+$') # i.e. https://www.somesite.com/something
is_root_path = re.compile(r'^/.+$')  # i.e. /some-text


'''
  This function get the links in HOME page
'''
def get_links_notices_site(site):
  _url = site['url']
  _queries = site['queries']

  try:
    response = requests.get(_url)
  except Exception as e:
    print('Error: ', e)
    return None

  if response.status_code != 200:
    print('Status code: ', response.status_code)
    return None

  soup = bs4.BeautifulSoup(response.text, 'html.parser')
  links_articles = soup.select(_queries['homepage_article_links'])
  links_articles = [validate_link(site, link.get('href')) for link in links_articles]

  return links_articles


'''
  This function get the links in SEARCH page
'''
def get_links_notices_search(site, name_celebrity):
  _queries = site['queries']
  _url = site['url_search']

  name_celebrity = name_celebrity.replace(' ', '+')
  _url = _url.replace('$search-name$', name_celebrity)

  try:
    response = requests.get(_url)
  except Exception as e:
    print('Error: ', e)
    return None

  if response.status_code != 200:
    print('Status code: ', response.status_code)
    return None

  soup = bs4.BeautifulSoup(response.text, 'html.parser')
  links_articles = soup.select(_queries['search_page_article_links'])
  links_articles = [validate_link(site, link.get('href')) for link in links_articles]

  return links_articles


'''
  Validate the correct structure of the link
'''
def validate_link(site, link):
  if is_well_formed_url.match(link):
    return link
  elif is_root_path.match(link):
    return f'{site["domain"]}{link}'
  else:
    return f'{site["domain"]}/{link}'


'''
  Make request to link article and get information
'''


def scrape_article_from_link(site, url_link, name_celebrity = ''):
  _queries = site['queries']
  print(f'DEBUG: LINK TO SCRAPE: {url_link}')

  if url_link.find('/videos/') != -1:
    return False

  try:
    article = requests.get(url_link)
  except Exception as e:
    print("Error request URL: ", url_link)
    print(e)
    return None

  if article.status_code != 200:
    print('Error getting URL: ', url_link)
    # Where is nota?
    print('status code = ', nota.status_code)
    return None

  article_soup = bs4.BeautifulSoup(article.text, 'html.parser')
  article_info_dict = get_article_info(_queries, article_soup, name_celebrity)

  if article_info_dict:
    article_info_dict['source'] = url_link

  return article_info_dict


'''
  get the information in the article: title, body, date, author and image
'''
def get_article_info(queries, soup, name_celebrity=''):
  article_info_dict = {}

  # Extract title
  title = validate_if_index_exists(soup.select(queries['article_title']))
  if title:
    if len(name_celebrity) == 0:
      if not find_name(title.text.lower()):
        return None
    else:
      if title.text.lower().find(name_celebrity) == -1:
        return None
    article_info_dict['title'] = title.text
  else:
    article_info_dict['title'] = None

  # Extract Date
  date_ = validate_if_index_exists(soup.select(queries['article_date']))
  if date_:
    article_info_dict['date'] = date_.get('datetime')
    if  article_info_dict['date'] == None:
      article_info_dict['date'] = date_.text
  else:
    article_info_dict['date'] = None

  # Extract author
  author = validate_if_index_exists(soup.select(queries['article_author']))
  if author:
    article_info_dict['author'] = author.text
  else:
    article_info_dict['author'] = None

  # Extract body
  body = soup.select(queries['article_body'])
  if body:
    body_article = ''
    for paragraph in body:
      body_article += paragraph.text + '\n'
    article_info_dict['content'] = body_article
  else:
    article_info_dict['content'] = None

  # Extract Image
  try:
    image = soup.select(queries['article_image'])[0].attrs[queries['article_image_attr']]
    if image:
      article_info_dict['image'] = image
    else:
      article_info_dict['image'] = None
  except IndexError as e:
    article_info_dict['image'] = None

  return article_info_dict


'''
  Validate if soup in index exists
'''
def validate_if_index_exists(select_soup):
  try:
    return select_soup[0]
  except IndexError as e:
    return None


if __name__ == "__main__":
  pass
