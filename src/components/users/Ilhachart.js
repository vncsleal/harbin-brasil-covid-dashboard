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
import { TrendingUpIcon } from '@heroicons/react/solid';
import moment from 'moment';

export default class IlhaChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }
  getChartData() {
    axios
      .get('/?city=Ilha Solteira', {
        headers: {
          Authorization: `token 4650fbff05e31b89147627514795e84e3370d4e1`,
        },
      })
      .then((res) => {
        const chartData = res.data.results.reverse();

        chartData.forEach(mmt);
        function mmt(chartData) {
          chartData.date = moment(chartData.date).format('l');
        }

        console.log(chartData.date);

        this.setState({
          chartData,
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
          <div class="mr-4 ml-4 mt-2 mb-2 border border-gray-300 p-4 rounded-2xl shadow justify-evenly space-y-4 bg-white">
            <div class="flex flex-row justify-between items-center">
              <div class="flex space-x-2">
                <TrendingUpIcon class="h-5 w-5 text-red-600"></TrendingUpIcon>
                <div class="text-lg leading-6 font-semibold text-gray-900">
                  Ilha Solteira Cases
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={this.state.chartData}
                margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={'date'} />
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
