import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Thiago G Santos</Text>
                    <Text color="gray.300" fontSize="small"> thiago.g.santos@outlook.com.br </Text>
                </Box>
            )}
        <Avatar size="md" name="Thiago G Santos" src="https://github.com/thiagoyellow.png" />
    </Flex>

    );
}