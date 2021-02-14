import ApolloClient, { gql } from 'apollo-boost';


function makeGQLCall() {

    const gqlUrl = "https://graphqlzero.almansi.me/api";

	const client = new ApolloClient({
		uri: gqlUrl,
	});

    client.query({
        query: gql`
            {
                user(id: 5) {
                    posts {
                      data {
                        title
                        body
                      }
                    }
                  }
            }
        `,
    }).then(retrieveData);
} 

function retrieveData(json) {
    console.log(json.data.user.posts.data)
    let data = json.data.user.posts.data;

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].title);
    }
}

makeGQLCall();




