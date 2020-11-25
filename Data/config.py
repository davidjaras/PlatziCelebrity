config_sites = {
  'news_sites':{
    0: {
      'name': 'BBC Mundo - Tecnologia',
      'domain': 'https://www.bbc.com',
      'url': 'https://www.bbc.com/mundo/topics/cyx5krnw38vt',
      'url_search': None,
      'queries': {
          'homepage_article_links': 'article header h3 a',
          'search_page_article_links': 'div .hard-news-unit h3 a',
          'article_title': 'main h1',
          'article_body': 'main div .css-1jxihfd-Paragraph',
          'article_date': 'main div time',
          'article_author': 'main div ul .css-dvly96-Name',
          'article_image': 'main figure .css-oijotl-ImagePlaceholder div img',
          'article_image_attr': 'src'
      }  
    },
    1: {
      'name': 'BBC Mundo - Deportes',
      'domain': 'https://www.bbc.com',
      'url': 'https://www.bbc.com/mundo/topics/cr50y726329t',
      'url_search': 'https://www.bbc.com/mundo/search?q=$search-name$',
      'queries': {
          'homepage_article_links': 'article header h3 a',
          'search_page_article_links': 'div .hard-news-unit h3 a',
          'article_title': 'main h1',
          'article_body': 'main div .css-1jxihfd-Paragraph',
          'article_date': 'main div time',
          'article_author': 'main div ul .css-dvly96-Name',
          'article_image': 'main figure .css-oijotl-ImagePlaceholder div img',
          'article_image_attr': 'src'
      } 
    },
    2: {
      'name': 'El Tiempo',
      'domain': 'https://www.eltiempo.com',
      'url': 'https://www.eltiempo.com/noticias/geopolitica',
      'url_search': 'https://www.eltiempo.com/buscar?q=$search-name$',
      'queries': {
          'homepage_article_links': '.col1 h3 a',
          'search_page_article_links': 'div .listing h3 a',
          'article_title': '.titulo-principal-bk h1',
          'article_body': '.articulo-contenido .modulos .contenido',
          'article_date': '.articulo-autor .fecha-publicacion-bk span',
          'article_author': '.articulo-autor .autor span',
          'article_image': '.col3 .recurso_apertura .figure-apertura-bk figure meta[itemprop="url"]',
          'article_image_attr': 'content'
      }  
    },
    3: {
      'name': 'El Comercio',
      'domain': 'https://elcomercio.pe',
      'url': 'https://elcomercio.pe/archivo/mundo/',
      'url_search': 'https://elcomercio.pe/buscar/$search-name$/todas/descendiente/?query=$search-name$',
      'queries': {
          'homepage_article_links': 'div .story-item h2 a',
          'search_page_article_links': 'div .story-item h2 a',
          'article_title': 'section .sht__title',
          'article_body': 'section .story-contents__content section p',
          'article_date': '.story-contents__author .story-contents__author-date time',
          'article_author': '.story-contents__author-info div .story-contents__author-role',
          'article_image': 'picture .s-multimedia__image',
          'article_image_attr': 'src'
      }  
    },
    4: {
      'name': 'E Online',
      'domain': 'https://www.eonline.com',
      'url': 'https://www.eonline.com/co/news',
      'url_search': None,
      'queries': {
          'homepage_article_links': '.content-item .column a',
          'article_title': '.column .article-detail__title',
          'article_body': '.article-detail__segment .article-detail__text-only p',
          'article_date': '.article-detail__meta-split .article-detail__meta__date',
          'article_author': '.article-detail__meta .article-detail__meta__author a',
          'article_image': 'picture img',
          'article_image_attr': 'src'
      } 
    }
  }# 'news_sites'
} #config site

