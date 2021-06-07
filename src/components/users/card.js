import moment from 'moment';
import calc from './calc';

function Card(props) {
  const [regionData, regionDataLast] = calc(props.region);
  console.log(regionData);
  return regionDataLast.map((r) => (
    <div class="grid">
      <div class="m-4 border border-gray-300 p-4 rounded-2xl shadow justify-evenly gap-4 bg-white">
        <div class="flex justify-between">
          <div>
            <div class="text-3xl leading-7 font-bold text-gray-900">
              {r.city}
            </div>
            <div class="text-sm leading-t font-medium text-gray-700">
              {r.state}
            </div>
          </div>
          <div class="text-sm leading-5 font-medium text-gray-700">
            {moment(r.date).format('l')}
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center space-x-2">
            <div class="text-2xl leading-7 font-bold text-gray-900">
              {r.last_available_confirmed}
            </div>
            <div class="text-xs leading-5 font-medium text-gray-700">
              (+{r.new_confirmed})
            </div>
          </div>
          <div class="text-sm leading-4 font-medium text-gray-700">cases</div>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center space-x-2">
            <div class="text-2xl leading-7 font-bold text-red-600">
              {r.last_available_deaths}
            </div>
            <div class="text-xs leading-5 font-medium text-red-500">
              (+{r.new_deaths})
            </div>
          </div>
          <div class=" text-sm leading-4 font-medium text-red-500">deaths</div>
        </div>
      </div>
    </div>
  ));
}

export default Card;
