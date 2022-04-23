import { HiCalendar } from "react-icons/hi";
import { Box, Flex, Text, Spacer, Tag, Button } from '@chakra-ui/react'; 

export function LaunchItem(launch) {
    return (
        <Box bg="gray.100" p={4} m={4} borderRadius="lg">

            <Flex display="flex">
                <Text fontSize="2xl">
                    Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                </Text>
                <Spacer/>
                <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                  {launch.launch_success ? "Exitosa" : "Failure"}
                </Tag>
            </Flex>
             
             <Flex align="center">
               <HiCalendar/> {" "}
               <Text fontSize="sm" ml={1} color="gray.600">
                  {launch.launch_date_local.split("T")[0]}
               </Text>
             </Flex>

             <Button mt={2} colorScheme="blue">Más Detalles</Button>
          </Box>
    )
}