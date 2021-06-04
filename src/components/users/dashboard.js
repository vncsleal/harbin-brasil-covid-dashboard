import '../../App.css';
import SP from './SP';
import Ilha from './Ilha';
import TL from './TL';
import SPChart from './SPchart';
import TLChart from './TLchart';
/* import IlhaChart from './Ilhachart'; */
import Brasil from './Brasil';

export default function Dashboard() {
  return (
    <div>
      <div class="grid bg-gray-50 ">
        <div class="grid md:grid-cols-4">
          <Brasil></Brasil>
          <SP></SP>
          <Ilha></Ilha>
          <TL></TL>
        </div>
        <div class="grid md:grid-cols-3">
          <SPChart></SPChart>
          <TLChart></TLChart>
          {/* <IlhaChart></IlhaChart> */}
        </div>
      </div>
    </div>
  );
}
