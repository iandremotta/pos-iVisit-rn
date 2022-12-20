import { Box, FlatList } from 'native-base';
import React from 'react';
import { FeedItem } from './FeedItem';
import { useQuery } from '../../utils/apolliClient';
import { feedPageQuery } from '../../queries/feed/feedPageQuery';

export type FeedCardProps = {
  uri: string;
  title: string;
  subtitle: string;
  description: string;
  minutes: number;
} & { id: string };

export function FeedCard({
  uri,
  title,
  subtitle,
  description,
  minutes,
}: FeedCardProps) {
  const { data } = useQuery(feedPageQuery);

  const feed = feedDecoder(data);
  return (
    <Box
      borderWidth="1"
      borderColor="dark.300"
      borderRadius="md"
      padding="4"
      margin="4"
      marginX="4"
    >
      <FlatList
        keyExtractor={({ id }) => id}
        data={feed}
        renderItem={({ item }) => <FeedItem {...item} />}
      />
    </Box>
  );
}

function feedDecoder(data: any): FeedCardProps[] {
  if (data === undefined) {
    return [];
  }

  const { data: iVisit } = data.iVisits;
  const items = iVisit.map(
    ({
      id,
      attributes: { uri, title, subtitle, description, minutes },
    }: any) => ({
      id: id.toString(),
      uri,
      title,
      subtitle,
      description,
      minutes,
    }),
  );

  return items;
}
