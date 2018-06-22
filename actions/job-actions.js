/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/job-quest-react-native/actions/job-actions.js
 */

import axios from "axios";
import { FETCH_JOBS } from "./types";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";

const JOB_ROOT_URL = "https://data.usajobs.gov/api/Search?";
//8dYd9ViGV6hNQfSjudp01ii+O7MeAnVFKx9WNexk9qc=

//https://data.usajobs.gov/api/Search?KeywordFilter=ALL&JobCategoryCode=2210%3b&ExcludeJOAOpenFor30Days=False&WhoMayApply=public&Student=False&fields=all

const JOB_QUERY_PARAMS = {
  WhoMayApply: "public",
  Student: "False",
  fields: "all",
  KeywordFilter: "ALL",
  Keyword: "Software",
  Radius: "25"
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, LocationName: zip });
  return `${JOB_ROOT_URL}${query}`;
};

const config = {
  headers: {
    Host: "data.usajobs.gov",
    "User-Agent": "michael@eprlife.com",
    "Authorization-Key": "8dYd9ViGV6hNQfSjudp01ii+O7MeAnVFKx9WNexk9qc="
  }
};

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url, config);

    dispatch({ type: FETCH_JOBS, payload: data });

    callback();
  } catch (e) {
    console.log(e);
  }
};
