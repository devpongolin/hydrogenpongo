export const FETCH_PRODUCT_USING_HANDLE = `
    query ProductTitle {
        product(handle: "waggle-smart-ai-bowl-for-puppies") {
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
                }
            }
        }
    }
  }
`;