#!/usr/bin/python

from config import config_sites
from names_search import find_name_celebrity
from functions import get_links_notices_search
from functions import scrape_article_from_link
from functions import get_links_notices_site
import sys
import json
import csv
import datetime


newspapers_hosts = config_sites['news_sites']


def search_celebrity(name_celebrity):
    notices_articles = []

    # validate if name to search is in repository of names
    name_found, category_found = find_name_celebrity(name_celebrity)
    if not name_found:
        return notices_articles

    for newspaper_host in newspapers_hosts:
        host = newspapers_hosts[newspaper_host]
        notices_links = get_links_notices_search(host, name_celebrity)

        if not notices_links:
            continue

        for news_link in notices_links:
            scraped_link = scrape_article_from_link(host,
                                                    news_link,
                                                    name_celebrity)
            if scraped_link:
                scraped_link['celebrity'] = name_found
                scraped_link['category'] = category_found
                notices_articles.append(scraped_link)

    return notices_articles


def search_all():
    notices_articles = []

    for newspaper_host in newspapers_hosts:
        host = newspapers_hosts[newspaper_host]
        notices_links = get_links_notices_site(host)

        if not notices_links:
            continue

        for news_link in notices_links:
            scraped_link = scrape_article_from_link(host, news_link)
            if scraped_link:
                notices_articles.append(scraped_link)

    return notices_articles


if __name__ == "__main__":

    name_celebrity = sys.argv[1].lower()
    name_celebrity = name_celebrity.replace('+', ' ')
    search_result = ''

    if (name_celebrity == 'all'):
        search_result = search_all()
    else:
        search_result = search_celebrity(name_celebrity)

    # var psr means print_search_result. Used to print search_result
    psr = json.dumps(search_result, ensure_ascii=False).encode('utf8').decode()
    print(psr)

    date_time = datetime.datetime.now()
    date_time = date_time.strftime("%Y%m%d-%H%M%S")
    name_file = f'Scraper_result_{date_time}.csv'

    with open(name_file, 'w') as csv_file:
        csv_writer = csv.writer(csv_file, delimiter=';')
        for article_scraped in search_result:
            csv_writer.writerow(list(article_scraped.values()))
