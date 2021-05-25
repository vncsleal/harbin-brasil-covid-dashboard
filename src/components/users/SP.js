import React, { Component } from 'react';
import axios from '../../axios';
import '../../App.css';
import moment from 'moment';

export default class SP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SP: [],
    };
  }
  getUsersData() {
    axios
      .get('/?city=São Paulo&is_last=True', {
        headers: {
          Authorization: `token bd8a99acb781704f4eb8170354eb636434b39665`,
        },
      })
      .then((res) => {
        const data = res.data.results;

        //console.log(data);
        const users = data.map((u) => (
          <div class="grid">
            <div class="m-4 border border-gray-300 p-4 rounded-2xl shadow justify-evenly space-y-3 bg-white">
              <div class="flex justify-between">
                <div>
                  <div class="text-3xl leading-7 font-bold text-gray-900">
                    {u.city}
                  </div>
                  <div class="text-sm leading-t font-medium text-gray-700">
                    {u.state}
                  </div>
                </div>
                <div class="text-sm leading-5 font-medium text-gray-700">
                  {moment(u.date).format('l')}
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-2">
                  <div class="text-2xl leading-7 font-bold text-gray-900">
                    {u.last_available_confirmed}
                  </div>
                  <div class="text-xs leading-5 font-medium text-gray-700">
                    (+{u.new_confirmed})
                  </div>
                </div>
                <div class="text-sm leading-4 font-medium text-gray-700">
                  cases
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-2">
                  <div class="text-2xl leading-7 font-bold text-red-600">
                    {u.last_available_deaths}
                  </div>
                  <div class="text-xs leading-5 font-medium text-red-500">
                    (+{u.new_deaths})
                  </div>
                </div>
                <div class=" text-sm leading-4 font-medium text-red-500">
                  deaths
                </div>
              </div>
            </div>
          </div>
        ));

        this.setState({
          users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {
    return <div>{this.state.users}</div>;
  }
}
