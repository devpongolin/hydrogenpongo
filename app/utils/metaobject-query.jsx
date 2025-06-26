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

export const PAGE_DATA_QUERY = `
query PagaeObjectData($handle: String){
  page(handle:$handle) {
     	id
      mainBannerData:metafield(namespace:"custom",key:"cms_page"){
      reference{
        ... on Metaobject{
          fields{
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
`;