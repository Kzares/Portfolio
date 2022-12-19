import {request, gql} from "graphql-request";
import { graphql } from "graphql";

const graphqlAPI = 'https://api-us-west-2.hygraph.com/v2/clbri73qy0v4u01t98hglf66e/master'
export const getProfile = async () =>{
    const query = gql`
    query Profiles {
        profiles {
          description
          profileImg {
            url
          }
          profile{
            url
          }
        }
      }
`    
    const result = await request(graphqlAPI, query);
    
    return result
}
export const getExperience = () =>{
    ///GEt the experience data
}
export const getSkills = async () =>{
    const query = gql`
    query Skills {
        skills(first: 20){
            id
            image {
              url
            }
            percent
          }
      }
    `
    const result = await request(graphqlAPI, query);
    
    return result.skills
}
export const getPortfolio = async () =>{
    const query = gql`
    query Portfolio {
        projects {
          id  
          description
          name
          image {
            url
          }
          tech
        }
      }
    `
    const result = await request(graphqlAPI, query);
    
    return result.projects
}