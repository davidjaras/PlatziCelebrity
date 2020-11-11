from common import config
import functions
import sys


def search_celebrity(name_celebrity):

	notices_links_count = 0
	notices_articles = []

	for i_host in range(1,4):
		host = config()['news_sites'][i_host]
		notices_links = functions.get_links_notices_search(host, name_celebrity)

		if not notices_links:
			continue

		notices_links_count += len(notices_links)  # line for testing purpose

		for i_notice_link in notices_links:
			scraped_link = functions.scrape_article_from_link(host, i_notice_link, name_celebrity)
			if scraped_link:
				notices_articles.append(scraped_link)

	#print(f'LINKS COUNT: {notices_links_count}')
	#print(f'ARTICLES SCRAPED COUNT: {len(notices_articles)}')
	return notices_articles


def search_all():

	notices_links_count = 0
	notices_articles = []

	for i_host in range(5):
		host = config()['news_sites'][i_host]
		notices_links = functions.get_links_notices_site(host)

		if not notices_links:
			continue

		notices_links_count += len(notices_links) #line for testing purpose

		for i_notice_link in notices_links:
			scraped_link = functions.scrape_article_from_link(host, i_notice_link)
			if scraped_link:
				notices_articles.append(scraped_link)
	
	#print(f'LINKS COUNT: {notices_links_count}')
	#print(f'ARTICLES SCRAPED COUNT: {len(notices_articles)}')
	return notices_articles



if __name__ == "__main__":

	name_celebrity = sys.argv[1].lower()

	if (name_celebrity == 'all'):
		print(json.dumps(search_all()))
	else:
		print(json.dumps(search_celebrity(name_celebrity)))
		