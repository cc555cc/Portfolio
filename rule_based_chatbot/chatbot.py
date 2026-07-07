from learning_resource.response_database import PORTFOLIO_INFO, INTENT_KEYWORDS
from learning_resource.model_learning import appending_learning_entry, predict_intent_from_learned_entries
from text_normalization import lemmatize_word, lemmatize_words
import random


def generate_response(phrase):
    intents = get_intent(phrase)
    return get_response(phrase, intents)


def parse_phrase(phrase):
    parse_list = []
    for word in phrase.lower().split():
        cleaned_word = word.strip(".,!?;:")
        if cleaned_word:
            parse_list.append(cleaned_word)
    return parse_list


def get_intent(phrase):
    word_list = parse_phrase(phrase)
    normalized_words = lemmatize_words(word_list)
    top_intent = top_level_intent(normalized_words)
    sub_intent = second_level_intent(top_intent, normalized_words)
    return [top_intent, sub_intent]


def top_level_intent(word_list):
    greeting_detected = False

    for word in word_list:
        for category_name, subcategories in INTENT_KEYWORDS.items():
            for keywords in subcategories.values():
                normalized_keywords = [lemmatize_word(k) for k in keywords]
                if word in normalized_keywords:
                    if category_name == "greeting":
                        greeting_detected = True
                        continue
                    return category_name

    if greeting_detected:
        return "greeting"

    return False


def second_level_intent(top_intent, word_list):
    if not top_intent or top_intent == "greeting":
        return top_intent

    for word in word_list:
        for subcategory_name, keywords in INTENT_KEYWORDS.get(top_intent, {}).items():
            normalized_keywords = [lemmatize_word(k) for k in keywords]
            if word in normalized_keywords:
                return subcategory_name

    return False


def get_response(original_phrase, intents, guessed_from_learning=False):
    top_intent, sub_intent = intents

    response = None

    if top_intent == "greeting":
        response = random.choice(PORTFOLIO_INFO["greeting"]["responses"])

    elif top_intent in PORTFOLIO_INFO:
        info = PORTFOLIO_INFO[top_intent]

        if "details" in info:
            word_list = parse_phrase(original_phrase)
            for key, detail_response in info["details"].items():
                if any(key in w for w in word_list):
                    response = detail_response
                    break

        if response is None:
            response = info.get("response", None)

    if response is None:
        predicted_intents = predict_intent_from_learned_entries(original_phrase)
        if predicted_intents:
            return get_response(original_phrase, predicted_intents, guessed_from_learning=True)
        return "Sorry, I don't know about that yet. Try asking about Carson's skills, projects, experience, education, or how to contact him!"

    appending_learning_entry(original_phrase, top_intent, sub_intent)

    if guessed_from_learning and isinstance(response, str):
        return f"I think you're asking about Carson's {top_intent}.\n{response}"

    return response
