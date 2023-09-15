import {useContext } from 'react';
import { GlobalContext } from '../Global/GlobalStorage';
export function useGlobalContext() {
	const context = useContext(GlobalContext);

	if (!context) {
	  throw new Error('useGlobalContext deve ser usado dentro de um GlobalProvider');
	}
      
	return context;
      }