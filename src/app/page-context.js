// Creating a context to pass isPending states starting from the top layout and useTransition to the children prop
// This will allow a loading UI to be created for slow 3G type networks (test by throttling the network)

'use client';

import { createContext } from 'react';

export default createContext('loading.');
