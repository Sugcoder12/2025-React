import Restaurantcard from "./Restaurantcard";
import resObj from "../utils/mockData";
import { useState } from "react";

const resObj = [
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info":{
            "id" : "33040",
            "name": "Shah Ghouse Hotel & Restaurant",
            "cloudinaryImageId": "hnx9nazpxdpqpypjo8ld",
            "locality": "Gachibowli",
            "areaName": "Gachibowli",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Biryani",
                "Chinese",
                "Mughlai",
                "Tandoor"
            ],
            "avgRating": 4.2,
            "parentId": "19271",
            "avgRatingString": "4.2",
            "totalRatingsString": "202K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 6.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-02 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Mughlai.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹200 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.8",
                    "ratingCount": "47K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/shah-ghouse-hotel-and-restaurant-gachibowli-rest33040",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "639474",
            "name": "Dum Safar Biryani",
            "locality": "Beside Wipro Lake",
            "areaName": "GACHIBOWLI",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "Tandoor",
                "Indian",
                "Desserts"
            ],
            "avgRating": 2.8,
            "parentId": "351013",
            "avgRatingString": "2.8",
            "totalRatingsString": "24",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-02 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹599",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/dum-safar-biryani-beside-wipro-lake-gachibowli-rest639474",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "300359",
            "name": "Barbeque Nation",
            "cloudinaryImageId": "z3jnkrrq2ean8ibo5g5h",
            "locality": "Nanakaramguda",
            "areaName": "Nanakramguda",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "2438",
            "avgRatingString": "4.1",
            "totalRatingsString": "1.7K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-02 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹139"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "9.9K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/barbeque-nation-nanakaramguda-nanakramguda-rest300359",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "614903",
            "name": "GetAWay-Ice Creams & Desserts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/2561821b-197e-4876-940b-0649521c8ce6_614903.jpg",
            "locality": "SANJAY COMMERCIAL",
            "areaName": "Gachibowli",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts",
                "Healthy Food"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "354819",
            "avgRatingString": "4.3",
            "totalRatingsString": "742",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-03 01:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹69"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/getaway-ice-creams-and-desserts-sanjay-commercial-gachibowli-rest614903",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "987301",
            "name": "Daily Kitchen - Homely Meals",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/563e3fdb-3656-4874-b3b1-c0fb892e5118_987301.jpg",
            "locality": "Beside Netaji Park",
            "areaName": "Manikonda",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Home Food",
                "Indian",
                "Thalis"
            ],
            "avgRating": 4.7,
            "parentId": "444382",
            "avgRatingString": "4.7",
            "totalRatingsString": "248",
            "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "10-20 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-03 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/daily-kitchen-homely-meals-beside-netaji-park-manikonda-rest987301",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "987295",
            "name": "WeFit - Protein Bowls, Salads & Sandwiches",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/e22b6b8a-9acb-4c2c-b3ce-c9f4c5638ab3_987295.JPG",
            "locality": "Beside Netaji Park",
            "areaName": "Manikonda",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Keto",
                "Snacks"
            ],
            "avgRating": 4.6,
            "parentId": "355285",
            "avgRatingString": "4.6",
            "totalRatingsString": "253",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-03 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/wefit-protein-bowls-salads-and-sandwiches-beside-netaji-park-manikonda-rest987295",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "987299",
            "name": "MOJO Pizza - 2X Toppings",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/4734b347-a9bc-433d-8e6c-14ccd21ca628_987299.jpg",
            "locality": "Beside Netaji Park",
            "areaName": "Manikonda",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "11329",
            "avgRatingString": "4.6",
            "totalRatingsString": "150",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-03 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/mojo-pizza-2x-toppings-beside-netaji-park-manikonda-rest987299",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "987298",
            "name": "LeanCrust Pizza- ThinCrust Experts",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/d8d645bc-2df8-4e73-b961-2b4fec00cd7f_987298.jpg",
            "locality": "Beside Netaji Park",
            "areaName": "Manikonda",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "11216",
            "avgRatingString": "4.6",
            "totalRatingsString": "147",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-03 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/leancrust-pizza-thincrust-experts-beside-netaji-park-manikonda-rest987298",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "878883",
            "name": "Shoyu",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/cb972d15-d571-4f42-87e6-ab2c11a34a1c_878883.jpg",
            "locality": "Kokapet",
            "areaName": "Nanakramguda",
            "costForTwo": "₹1200 for two",
            "cuisines": [
                "Pan-Asian",
                "Japanese",
                "Sushi",
                "Chinese",
                "Korean",
                "Oriental"
            ],
            "avgRating": 4.4,
            "parentId": "255090",
            "avgRatingString": "4.4",
            "totalRatingsString": "1.0K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-03 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/shoyu-kokapet-nanakramguda-rest878883",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "1009701",
            "name": "The Rameshwaram Cafe",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/373b4f53-4d8e-4471-8345-5325453a4916_1009701.jpg",
            "locality": "Manikonda",
            "areaName": "Manikonda",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "South Indian"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "384316",
            "avgRatingString": "4.4",
            "totalRatingsString": "34",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-02 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/the-rameshwaram-cafe-manikonda-rest1009701",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "674540",
            "name": "Bakingo",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/7/40143db7-103a-4c47-8079-a3dc7eeab05f_674540.jpg",
            "locality": "TNGO S Colony",
            "areaName": "Gachibowli",
            "costForTwo": "₹499 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 4.5,
            "parentId": "3818",
            "avgRatingString": "4.5",
            "totalRatingsString": "3.9K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 6.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-03 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/bakingo-tngo-s-colony-gachibowli-rest674540",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "18904",
            "name": "Theobroma",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/6a534caa-6e5c-4934-91bd-411aa7085bfc_18904.jpg",
            "locality": "Manikonda",
            "areaName": "Manikonda",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 4.6,
            "parentId": "1040",
            "avgRatingString": "4.6",
            "totalRatingsString": "4.4K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-03 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Desserts.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.9",
                    "ratingCount": "157"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/theobroma-manikonda-rest18904",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "610787",
            "name": "California Burrito",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/403f3ee3-66d3-4847-8844-0438fca72d46_610787.jpg",
            "locality": "Manikonda",
            "areaName": "Manikonda",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mexican",
                "American",
                "Salads",
                "Continental",
                "Keto",
                "Healthy Food",
                "Beverages",
                "Snacks",
                "Desserts",
                "Fast Food"
            ],
            "avgRating": 4.6,
            "parentId": "1252",
            "avgRatingString": "4.6",
            "totalRatingsString": "8.0K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-03 01:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.5",
                    "ratingCount": "579"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/california-burrito-manikonda-rest610787",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "694141",
            "name": "Mandi @36",
            "cloudinaryImageId": "8792425da5939dd6f9e01d28f4c7902d",
            "locality": "Gachibowli",
            "areaName": "Gachibowli",
            "costForTwo": "₹1000 for two",
            "cuisines": [
                "Arabian",
                "Tandoor"
            ],
            "avgRating": 4.3,
            "parentId": "13223",
            "avgRatingString": "4.3",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-02 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "878"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/mandi-36-gachibowli-rest694141",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
            "id": "825304",
            "name": "Hotel Shubham Palace - Dhanturi Group of Hotels",
            "cloudinaryImageId": "2d1e9e54ac3864b631157a6269515402",
            "locality": "Kokapet",
            "areaName": "Narsingi",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Chinese",
                "Indian",
                "Biryani",
                "Beverages",
                "Ice Cream"
            ],
            "avgRating": 4.2,
            "parentId": "8146",
            "avgRatingString": "4.2",
            "totalRatingsString": "2.8K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-02-02 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-8c3d8133-ab8d-434b-a4e2-216bfa5d5390"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/hyderabad/hotel-shubham-palace-dhanturi-group-of-hotels-kokapet-narsingi-rest825304",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];

const Body = () => {
    // local State Variable - Super power variable
    const [listOfResturant, setListOfResturant] = useState(resObj);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                    console.log("hi");
                    const filteredList = listOfResturant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfResturant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              
               { listOfResturant.map ( resturant => 
                   <Restaurantcard key={resturant.info.id} resData={resturant.info}/> 
                )}
            </div>
        </div>
    )
}

export default Body; 