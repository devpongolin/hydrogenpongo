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
            iconWithDiscription: metafield(namespace:"custom", key:"description_with_icon") {
                    value
            }
            iconWithDiscriptionLabel: metafield(namespace:"custom", key:"description_with_icon_label") {
                    value
            }
            productFaq: metafield(namespace:"custom", key:"product_faq_for_hydrogen") {
                    value
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