import React, { Component } from 'react';
import axios from '../../axios';
import '../../App.css';
import moment from 'moment';

export default class Brasil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SP: [],
    };
  }
  async getUsersData() {
    const {
      data: { results: states },
    } = await axios.get('/?place_type=state&is_last=True', {
      headers: {
        Authorization: x,
      },
    });

    const brazilianConfirmedCases = data.results.reduce((acc, curr) => {
      return acc + curr.last_available_confirmed;
    }, 0);

    this.setState({ states, brazilianConfirmedCases });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    return (
      <div>
        {states.map((state) => (
          <div class="grid">
            <div class="m-4 border border-gray-300 p-4 rounded-2xl shadow justify-evenly space-y-3 bg-white">
              <div class="flex justify-between">
                <div>
                  <div class="text-3xl leading-7 font-bold text-gray-900">
                    {state.city}
                  </div>
                  <div class="text-sm leading-t font-medium text-gray-700">
                    {state.state}
                  </div>
                </div>
                <div class="text-sm leading-5 font-medium text-gray-700">
                  {moment(state.date).format('l')}
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-2">
                  <div class="text-2xl leading-7 font-bold text-gray-900">
                    {state.last_available_confirmed}
                  </div>
                  <div class="text-xs leading-5 font-medium text-gray-700">
                    (+{state.new_confirmed})
                  </div>
                </div>
                <div class="text-sm leading-4 font-medium text-gray-700">
                  cases
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-2">
                  <div class="text-2xl leading-7 font-bold text-red-600">
                    {state.last_available_deaths}
                  </div>
                  <div class="text-xs leading-5 font-medium text-red-500">
                    (+{state.new_deaths})
                  </div>
                </div>
                <div class=" text-sm leading-4 font-medium text-red-500">
                  deaths
                </div>
              </div>
            </div>
          </div>
        ))}
        <div class="flex flex-col">
          <div class="flex items-center space-x-2">
            <div class="text-2xl leading-7 font-bold text-red-600">
              {brazilianConfirmedCases}
            </div>
          </div>
          <div class=" text-sm leading-4 font-medium text-red-500">
            somatória de todo o país
          </div>
        </div>
      </div>
    );
  }
}
