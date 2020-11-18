'''
  This file contains all functions and resources needed to validate whether a title
  refers to a celebrity or not
'''

import json

with open('dataset/celebrities_names_repositories.json', encoding="utf8") as file:
  names_celebrities = json.load(file)
  

def find_name(title):

  for celebrity in names_celebrities:

    name = names_celebrities[celebrity]

    if len(name) <= 5:
      continue

    is_any_famous_in_title = title.find(name)
    if is_any_famous_in_title != -1:
      #return True
      return name

  return False


def validate_if_name_exists(name):
  return name in names_celebrities.values()


if __name__ == "__main__":
  title = 'llega a colombia james rodriguez'
  if find_name(title):
    print('found')
  else:
    print('not found')
