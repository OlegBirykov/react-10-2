import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterServices, changeFilter } from '../actions/actionCreators';

function ServiceFilter() {
	const filter = useSelector(state => state.serviceFilter);
	const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterServices(filter));
  }, [filter, dispatch]);

	const handleChange = evt => {
		dispatch(changeFilter(evt.target.value));
	}

	return (
		<label className="ServiceFilter">
      Filter
			<input name="filter" onChange={handleChange} value={filter} />
		</label>
	);
}

export default ServiceFilter;