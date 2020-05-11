import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

function debugMetaReducer(r) {

  return function(state, action) {

    console.debug('state', state);
    console.debug('action', action);
    const result = r(state, action);
    
    return result;
    
  }

  
  
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debugMetaReducer] : [];
