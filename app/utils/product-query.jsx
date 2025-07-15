export const FETCH_PRODUCT_USING_HANDLE = `#graphql
    query ProductTitle($handle: String!) {
        product(handle: $handle) {
            id
            title
            description
            images(first:10){
                edges{
                    node{
                    url
                    }
                }
            }
            variants(first:10){
                edges{
                    node{
                    id
                    title
                    quantityAvailable
                    price{
                        amount
                    }
                    compareAtPrice{
                        amount
                    }
                    image {
                        url
                        altText
                    }
                    }
                }
            }
            productFeatureTitle: metafield(namespace:"custom", key:"product_feature_title") {
                    value
            }
            productFeatureDescription: metafield(namespace:"custom", key:"product_features_entries") {
              references(first: 250) {
                edges {
                  node {
                    ... on Metaobject {
                      fields {
                        key
                        value
                        reference {
                        ... on MediaImage {
                          image {
                            url
                            altText
                          }
                        }
                    }
                      }
                    }
                  }
                }
              }
            }
            petGuideSteps: metafield(namespace:"custom", key:"guide_steps") {
              references(first: 250) {
                edges {
                  node {
                    ... on Metaobject {
                      fields {
                        key
                        value
                        reference {
                        ... on MediaImage {
                          image {
                            url
                            altText
                          }
                        }
                    }
                      }
                    }
                  }
                }
              }
            }
            questionAnswer: metafield(namespace: "custom", key: "product_faq_referance") {
              references(first: 250) {
                edges {
                  node {
                    ... on Metaobject {
                      fields {
                        key
                        value
                      }
                    }
                  }
                }
              }
            }
            featuredBlogs: metafield(namespace: "custom", key: "hydrogen_featured_blogs_new") {
              references(first: 250) {
                edges {
                  node {
                    ... on Metaobject {
                      fields {
                        key
                        value
                        reference {
                          ... on MediaImage {
                            image {
                              url
                              altText
                            }
                          }
                          ... on Metaobject {
                            fields {
                              key
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            specComparisonTitle: metafield(namespace: "custom", key: "hydrogen_feature_compare_title") {
              value
            }
            specComparison: metafield(namespace: "custom", key: "hydrogen_features_compare") {
              references(first: 250) {
                edges {
                  node {
                    ... on Metaobject {
                      fields {
                        key
                        value
                        reference {
                          ... on MediaImage {
                            image {
                              url
                              altText
                            }
                          }
                          ... on ProductVariant {
                            id
                            title
                            quantityAvailable
                            price {
                              amount
                            }
                            compareAtPrice {
                              amount
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            petsNeeds: metafield(namespace: "custom", key: "pets_needs") {
              reference{
                ... on Metaobject {
                  fields {
                    key
                    value
                    reference {
                      ... on MediaImage {
                        image {
                          url
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
            bundleProduct: metafield(namespace: "custom", key: "bundle_for_product") {
              references(first: 10) {
                edges {
                  node {
                    ... on Product {
                      id
                      title
                      images(first: 1) {
                        edges {
                          node {
                            url
                          }
                        }
                      }
                      variants(first:10){
                          edges{
                              node{
                              id
                              quantityAvailable
                              price{
                                  amount
                              }
                              compareAtPrice{
                                  amount
                              }
                              }
                          }
                      }
                    }
                  }
                }
              }
            }
        }
    }
`;

export const METOBJECT_DATA_QUERY = `#graphql
  query MetaobjectData($type: String!) {
    metaobjects(type:$type, first: 250) {
        edges {
            node {
                fields {                    
                    key
                    value
                    reference {
                        ... on MediaImage {
                          image {
                            url
                            altText
                          }
                        }
                    }
                    references(first:250) {
                        nodes{
                          ... on MediaImage {
                                image {
                                    url
                                    altText
                                }
                            }
                        }
                    }
                }
            }
        }
    }
  }
`;