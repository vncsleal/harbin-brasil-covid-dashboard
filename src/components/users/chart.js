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
import calc from './calc';

function Chart(props) {
  const [regionData, regionDataLast] = calc(props.region);
  console.log(regionDataLast);
  return (
    <div>
      <div>
        <div class="mr-4 ml-4 mt-2 mb-2 border border-gray-300 p-4 rounded-2xl shadow justify-evenly space-y-4 bg-white">
          <div class="flex flex-row justify-between items-center">
            <div class="flex space-x-2">
              <TrendingUpIcon class="h-5 w-5 text-red-600"></TrendingUpIcon>
              <div class="text-lg leading-6 font-semibold text-gray-900">
                {props.region} Cases
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={regionData}
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
                dataKey={'last_available_confirmed'}
                name={'Confirmed Cases'}
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

export default Chart;
