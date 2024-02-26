// import * as React from 'react'
// import { useGetPokemonByNameQuery } from '../../services/pokemon'
// import { View, Text, Image, ScrollView } from 'react-native'
// import Layout from '../../components/Layout'
// export default function SignIn() {
//   const { data, error, isLoading } = useGetPokemonByNameQuery(1)

//   return (
//     <Layout>
//     <ScrollView>
//       {error ? (
//         <Text>Oh no, there was an error</Text>
//       ) : isLoading ? (
//         <Text>Loading...</Text>
//       ) : data ? (
//       data.map((item)=> {
//       return (
//         <View className="my-4">
        
//           <Text className="font-bold">{item.title}</Text>
//           <Text>{item.abstract}</Text>
//       </View>
//       )
//       })
       
//       ) : null}
//       </ScrollView>
//     </Layout>
//   )
// }