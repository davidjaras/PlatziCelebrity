import argparse
from common import config
import functions
import sys


def main_test():

	# variables for testing
	i_host = 4
	i_notices_links = 0

	# get site to scrape
	host = config()['news_sites'][i_host]

	# get links in site to scrape
	notices_links = functions.get_links_notices_site(host)

	# get links in search site to scrape
	#notices_links = functions.get_links_notices_search(host)
	
	# print(notices_links)

	# test get article elements
	print(functions.scrape_article_from_link(
		host, notices_links[i_notices_links]))


def search_celebrity(name_celebrity):

	notices_links_count = 0
	notices_articles = []

	for i_host in range(1,4):
		host = config()['news_sites'][i_host]
		notices_links = functions.get_links_notices_search(host, name_celebrity)
		notices_links_count += len(notices_links)  # line for testing purpose

		for i_notice_link in notices_links:
			scraped_link = functions.scrape_article_from_link(host, i_notice_link, name_celebrity)
			if scraped_link:
				notices_articles.append(scraped_link)

	print(f'LINKS COUNT: {notices_links_count}')
	print(f'ARTICLES SCRAPED COUNT: {len(notices_articles)}')
	print(notices_articles)


def search_all():

	notices_links_count = 0
	notices_articles = []

	for i_host in range(5):
		host = config()['news_sites'][i_host]
		notices_links = functions.get_links_notices_site(host)
		notices_links_count += len(notices_links) #line for testing purpose

		for i_notice_link in notices_links:
			scraped_link = functions.scrape_article_from_link(host, i_notice_link)
			if scraped_link:
				notices_articles.append(scraped_link)
	
	print(f'LINKS COUNT: {notices_links_count}')
	print(f'ARTICLES SCRAPED COUNT: {len(notices_articles)}')
	print(notices_articles)

	# David: guarda los objetos de los links y de las noticias scrapeadas para comparara después
	# también recuerda formatear las fechas de las noticias
	# también adecua el script para busquedas particulares
	# y por ultimo implementa el arg parse para la llamada del scritp
	# 
		


if __name__ == "__main__":

	name_celebrity = sys.argv[1].lower()

	if (name_celebrity == 'all'):
		search_all()
	else:
		search_celebrity(name_celebrity)

	#search_all()
	#name_celebrity = args.celebrity_name_to_search
	#search_celebrity(name_celebrity)
