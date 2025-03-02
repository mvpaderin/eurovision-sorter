import React from 'react';
import Country from './Country';

// Define a new type
type Entry = {
  country: Country;
  artist: string;
  title: string;
};

type Props = {
  entry: Entry;
};

const EntryComponent: React.FC<Props> = ({ entry }) => {
  const entryName = `${entry.artist} - ${entry.title}`;
  return (
    <div>
      <h1>{entry.country.name}</h1>
      <p>{entryName}</p>
    </div>
  );
};

export default EntryComponent;