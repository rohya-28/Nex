import Link from 'next/link';
import Image from 'next/image';
import {Flex,Box,Text,Button} from '@chakra-ui/react';
import { baseUrl ,fetchApi } from '../utils/fetchapi';
import Property from '../components/property';

const Banner = ({purpose , title , title2 , desc1 ,desc2 ,imageUrl ,linkName ,buttonText}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
     
       <Box p="5">
         <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
         <Text fontSize="3xl" fontWeight="bold">{title}<br/> {title2}</Text>
         <Text  fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.900">{desc1}<br/>{desc2}</Text>
         <Button fontSize="xl" bg="yellow.300" color="white" >
              <Link href ={linkName}>{buttonText}</Link>
         </Button>
       </Box>
  </Flex>
  )


export default function Home({propertyForSale,propertyForRent}) {
  return (
    <Box >
          <Banner purpose={'for Rent'} 
          title="Rent a Home"
          title2="EveryOne"
          desc1="Explore Apart , Villas, Homes"
          desc2="and More"
          buttonText="Explore Rent"
          linkName="/search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
          />
          <Flex flexWrap="wrap">
          {propertyForRent.map((property) => <Property property={property} key={property.id}/>)}
          </Flex>

          <Banner purpose="BUY A HOME" 
           title="Find, Buy & Own Your"
           title2="Dream Home"
           desc1="Explore Apart , Villas, Homes"
           desc2="and More"
           buttonText="Explore Rent"
           linkName="/search?purpose=for-sale"
           
          />
             <Flex flexWrap="wrap">
             {propertyForSale.map((property) => <Property property={property} key={property.id}/>)}
             </Flex>
         
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerpage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerpage=6`)

  return {
    props: {
      propertyForSale:propertyForSale?.hits,
      propertyForRent:propertyForRent?.hits
    }
  }

}

 