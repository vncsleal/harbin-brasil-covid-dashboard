import React, { Component } from 'react';
import axios from '../../axios';
import '../../App.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { DotsVerticalIcon, TrendingUpIcon } from '@heroicons/react/solid';
import moment from 'moment';

export default class BrazilChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }
  getChartData() {
    axios
      .get('/?place_type=state&is_last=True', {
        headers: {
          Authorization: `token bd8a99acb781704f4eb8170354eb636434b39665`,
        },
      })
      .then((res) => {
        const chartData = res.data.results.reverse();

        chartData.forEach(mmt);
        function mmt(chartData) {
          chartData.date = moment(chartData.date).format('l');
        }
        const brazilianConfirmedCases = chartData.reduce((acc, curr) => {
          return acc + curr.last_available_confirmed;
        }, 0);
        const brazilianNewConfirmedCases = chartData.reduce((acc, curr) => {
          return acc + curr.new_confirmed;
        }, 0);
        const brazilianDeaths = chartData.reduce((acc, curr) => {
          return acc + curr.last_available_deaths;
        }, 0);
        const brazilianNewDeaths = chartData.reduce((acc, curr) => {
          return acc + curr.new_deaths;
        }, 0);
        const braziliandate = chartData.date;
        const brazil = {
          brazilianConfirmedCases,
          braziliandate,
        };
        console.log(brazil);

        this.setState({
          chartData,
          brazilianConfirmedCases,
          brazilianNewConfirmedCases,
          brazilianDeaths,
          brazilianNewDeaths,
          braziliandate,
          brazil,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getChartData();
  }
  render() {
    return (
      <div>
        <div>
          <div class="m-4 border border-gray-300 p-4 rounded-2xl shadow justify-evenly space-y-4 bg-white">
            <div class="flex flex-row justify-between items-center">
              <div class="flex space-x-2">
                <TrendingUpIcon class="h-5 w-5 text-red-600"></TrendingUpIcon>
                <div class="text-lg leading-6 font-semibold text-gray-900">
                  Brasil Cases
                </div>
              </div>
              <DotsVerticalIcon class="w-5 h-5 text-gray-500"></DotsVerticalIcon>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={this.state.brazil}
                margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'braziliandate'} />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="last_available_confirmed"
                  name="Confirmed Cases"
                  stroke="#DC2626"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}
