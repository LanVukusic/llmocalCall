import { Alert, Flex, ScrollArea, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { SideBar } from '../sidebar/SideBar';
import { useState } from 'react';
import { MeetingsList } from '../meetingList/MeetingList';

import { Room } from '../../api/model';
// import { useMeetingsControllerUpdate } from '../../api/meetings/meetings';
import { useRoomsControllerFindAll } from '../../api/rooms/rooms';

export const DashBoard = () => {
  const [opened, handlers] = useDisclosure(false);
  const {
    data: rooms,
    isLoading: loadingRooms,
    refetch,
  } = useRoomsControllerFindAll();

  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <Flex
      h="100%"
      style={{
        overflow: 'hidden',
      }}
    >
      <SideBar
        opened={opened}
        handlers={handlers}
        selectedRoom={selectedRoom?.id || 0}
        setSelectedRoom={setSelectedRoom}
        loadingRooms={loadingRooms}
        rooms={rooms}
        refetch={refetch}
      />

      <Stack w="100%" py="md">
        <ScrollArea h="100%" type="always" w="100%">
          {selectedRoom ? (
            <MeetingsList room={selectedRoom} />
          ) : (
            <Alert title="No rooms seleted" mx="lg">
              Open the sidebar and select a room
            </Alert>
          )}
        </ScrollArea>
      </Stack>
    </Flex>
  );
};
