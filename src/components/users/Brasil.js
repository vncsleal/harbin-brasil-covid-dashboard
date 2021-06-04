import React, { Component } from 'react';
import axios from '../../axios';
import '../../App.css';
import moment from 'moment';
//api url: baseURL: 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/'
export default class Brasil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Brasil: [],
    };
  }
  getUsersData() {
    axios
      .get('/?place_type=state&is_last=True', {
        headers: {
          Authorization: `token 4650fbff05e31b89147627514795e84e3370d4e1`,
          "Access-Control-Allow-Origin": "*"
        },
      })
      .then((res) => {
        const data = res.data.results;
        const brazilianConfirmedCases = data.reduce((acc, curr) => {
          return acc + curr.last_available_confirmed;
        }, 0);
        const brazilianNewConfirmedCases = data.reduce((acc, curr) => {
          return acc + curr.new_confirmed;
        }, 0);
        const brazilianDeaths = data.reduce((acc, curr) => {
          return acc + curr.last_available_deaths;
        }, 0);
        const brazilianNewDeaths = data.reduce((acc, curr) => {
          return acc + curr.new_deaths;
        }, 0);

        //console.log(data);
        const dados = (
          <div class="grid">
            <div class="m-4 border border-gray-300 p-4 rounded-2xl shadow justify-evenly space-y-3 bg-white">
              <div class="flex justify-between">
                <div>
                  <div class="text-3xl leading-7 font-bold text-gray-900">
                    Brasil
                  </div>
                  <div class="text-sm leading-t font-medium text-gray-700">
                    BR
                  </div>
                </div>
                <div class="text-sm leading-5 font-medium text-gray-700">
                  {moment(data.date).format('l')}
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-2">
                  <div class="text-2xl leading-7 font-bold text-gray-900">
                    {brazilianConfirmedCases}
                  </div>
                  <div class="text-xs leading-5 font-medium text-gray-700">
                    (+{brazilianNewConfirmedCases})
                  </div>
                </div>
                <div class="text-sm leading-4 font-medium text-gray-700">
                  cases
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center space-x-2">
                  <div class="text-2xl leading-7 font-bold text-red-600">
                    {brazilianDeaths}
                  </div>
                  <div class="text-xs leading-5 font-medium text-red-500">
                    (+{brazilianNewDeaths})
                  </div>
                </div>
                <div class=" text-sm leading-4 font-medium text-red-500">
                  deaths
                </div>
              </div>
            </div>
          </div>
        );

        this.setState({
          dados,
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
    return <div>{this.state.dados}</div>;
  }
}
