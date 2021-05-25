import React from 'react';
import '../../App.css';

export default function About() {
  return (
    <div>
      <div>
        <div class="m-4 space-y-2">
          <div class="text-3xl leading-9 font-bold text-gray-900">About</div>
          <div class="text-base leading-5 font-medium text-gray-700 space-y-2 md:w-1/2">
            <p>
              This dashboard was made by{' '}
              <a href="mailto:vinicius.leal@harbinbr.com" class="text-blue-600">
                Vinicius Leal
              </a>{' '}
              and its presented under a Creative Commons
              Attribution-NonCommercial-ShareAlike 4.0 International License.
            </p>
            <p>
              ‘Harbin Brasil’ and its logo is property of Harbin Electric
              Machinery Co. Ltd. All rights reserved.
            </p>
            <p>
              Data source: Secretarias de Saúde das Unidades Federativas, data
              treated by Álvaro Justen and volunteers team of{' '}
              <a href="https://brasil.io/covid19/" class="text-blue-600">
                Brasil.IO
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
