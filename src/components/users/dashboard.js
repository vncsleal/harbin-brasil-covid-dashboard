import '../../App.css';
import Card from './card';
import Chart from './chart';

export default function Dashboard() {
  return (
    <div>
      <div class="grid bg-gray-50 ">
        <div class="grid md:grid-cols-4">
          <Card region="Assis Brasil" />
          <Card region="Brasil" />
        </div>
        <div class="grid md:grid-cols-2">
          <Chart region="Assis Brasil" />
          <Chart region="Brasil" />
        </div>
      </div>
    </div>
  );
}
