import React from 'react'

/**
 * SubdivisionMap renders the interactive SVG subdivision map inline for full interactivity.
 * You can add props/callbacks for lot click/hover if needed.
 */
export function SubdivisionMap() {
  return (
    <div
      className='w-full h-full relative flex items-center justify-center'
      style={{
        backgroundImage: "url('/mapbackground (2).png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Inline SVG markup below. */}
      <svg
        viewBox='0 0 1100 350'
        width='1100'
        height='350'
        style={{ transform: 'rotate(10deg)' }}
        version='1.1'
        id='svg52'
        xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter id='filter53' x='0' y='0' width='1' height='1'>
            <feColorMatrix
              values='0.31 0.62 0.07 -0.2 0 0.31 0.62 0.07 -0.2 0 0.31 0.62 0.07 -0.2 0 0 0 0 1 0 '
              id='feColorMatrix53'
            />
          </filter>
        </defs>
        <style>{`
          .lot {
            transition: transform 0.2s cubic-bezier(0.4,0,0.2,1), fill 0.2s cubic-bezier(0.4,0,0.2,1) !important;
            transform-box: fill-box !important;
            transform-origin: center !important;
          }
          .lot:hover {
            fill: lightblue !important;
            transform: scale(1.10) !important;
          }
          text {
            pointer-events: none;
            user-select: none;
          }
        `}</style>
        <path
          id='lot-1'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.62194 }}
          className='lot'
          d='m 1027.8051,285.91446 30.4829,-163.87225 30.2033,5.6511 -45.6123,160.50735 z'
          sodipodi-nodetypes='ccccc'
        />
        <path
          id='lot-2'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 1058.288,122.04221 -30.308,163.87944 -27.6566,-3.6389 29.8194,-164.97104 z'
          sodipodi-nodetypes='ccccc'
        />
        <path
          id='lot-3'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='M 1030.1428,117.31171 1000.3234,282.28275 969.78205,279.191 1000.8377,112.36295 Z'
          sodipodi-nodetypes='ccccc'
        />
        <path
          id='lot-4'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 969.78205,279.19101 -55.27307,-23.49469 13.01951,-67.36965 32.18616,-8.01483 12.43564,-72.91123 28.68741,4.96235 z'
          sodipodi-nodetypes='ccccccc'
        />
        <path
          id='lot-5'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 959.71465,180.31184 -32.18616,8.01483 15.31673,-86.52805 29.30507,5.60198 z'
          sodipodi-nodetypes='ccccc'
        />
        <path
          id='lot-6'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 914.50898,255.69632 -54.28218,-22.25844 7.31244,-36.54662 30.73165,-11.81568 17.12397,-87.67066 27.45036,4.3937 z'
          sodipodi-nodetypes='ccccccc'
        />
        <path
          id='lot-7'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 898.27089,185.07557 -30.73165,11.81569 17.65859,-104.87688 30.19688,5.39054 z'
          sodipodi-nodetypes='ccccc'
        />
        <path
          id='lot-8'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='M 885.19783,92.01439 860.2268,233.43788 834.04136,222.03528 857.40311,86.65255 Z'
          sodipodi-nodetypes='ccccc'
        />
        <path
          d='m 829.33577,80.55439 -23.29154,129.73392 27.99713,11.74697 23.36175,-135.38274 z'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          id='lot-9'
          className='lot'
          sodipodi-nodetypes='ccccc'
        />
        <path
          id='lot-10'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='M 829.33577,80.55439 806.04423,210.28831 778.86648,198.19622 800.64768,75.36398 Z'
          sodipodi-nodetypes='ccccc'
        />
        <path
          id='lot-11'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 778.86648,198.19623 -28.81877,-11.33237 21.63994,-117.02333 28.96003,5.52345 z'
          sodipodi-nodetypes='ccccc'
        />
        {/* ...rest of SVG content... */}
        <path
          id='lot-12'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 771.68765,69.84053 -21.63994,117.02334 -43.39316,-19.23769 4.25381,-28.73342 20.45296,-6.15405 11.9131,-68.21471 z'
        />
        <path
          id='lot-13'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 743.27442,64.524 -11.9131,68.21471 -24.70677,34.88747 -27.66408,-10.30153 6.46215,-41.44402 19.8509,-7.4575 10.05307,-49.05632 z'
        />
        <path
          id='lot-14'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 715.35659,59.36681 -10.05307,49.05632 -19.8509,7.45749 -6.46215,41.44403 -27.36579,-11.22892 6.24617,-33.96991 18.34656,-5.59293 10.46239,-52.46902 z'
        />
        <path
          id='lot-15'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 686.6798,54.06387 -10.46239,52.46902 -18.34656,5.59293 -6.24617,33.96991 -17.58004,-3.39759 18.20231,-94.49454 z'
        />
        <path
          id='lot-16'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 652.24695,48.2036 -18.20231,94.49454 -56.06256,-10.33631 4.52468,-27.41484 31.75042,-9.14609 9.70945,-53.05127 z'
        />
        <path
          id='lot-17'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 614.25718,95.8009 -31.75042,9.14609 12.33568,-67.34892 29.12419,5.15156 z'
        />
        <path
          id='lot-18'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 594.84244,37.59807 -16.86036,94.76376 -68.44704,-12.77823 3.56079,-22.42513 42.96212,-13.11116 10.60988,-50.4911 z'
        />
        <path
          id='lot-19'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 566.66783,33.55621 -10.60988,50.4911 -42.96212,13.11116 4.73908,-23.56612 12.06238,-4.31927 7.90905,-41.69923 z'
        />
        <path
          id='lot-20'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 537.80635,27.57385 -7.90905,41.69923 -12.06239,4.31927 -8.29987,45.99125 -75.43689,-13.59312 -1.20323,-36.35937 55.18096,-14.38688 6.87119,-35.59072 z'
        />
        <path
          id='lot-21'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 432.89492,69.63111 -1.57765,-53.70034 c 18.97508,-1.11557 40.56767,0.74716 63.6298,3.72274 l -6.87119,35.59072 z'
        />
        <path
          id='lot-22'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 431.31727,15.93077 2.78087,90.05971 -24.37616,-4.11432 -10.85063,-83.3521 c 11.39822,-1.44735 22.21354,-2.31178 32.44592,-2.59329 z'
        />
        <path
          id='lot-23'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 398.87135,18.52406 10.85063,83.3521 -37.06572,-6.95461 -17.18991,-66.94078 c 14.7598,-4.60954 29.22813,-7.76178 43.405,-9.45671 z'
        />
        <path
          id='lot-24'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 355.46635,27.98077 17.18991,66.94078 -31.51848,32.87343 -10.6897,-43.61393 6.80532,-7.01128 -10.90098,-41.76806 z'
        />
        <path
          id='lot-25'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 326.35242,35.40171 10.90098,41.76806 -6.80532,7.01128 10.6897,43.61393 -15.27743,16.35174 L 298.8336,43.01964 Z'
        />
        <path
          id='lot-26'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='M 298.8336,43.01964 325.86035,144.14672 302.33794,170.04716 270.06488,51.32831 Z'
        />
        <path
          id='lot-27'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 270.06488,51.32831 32.27306,118.71885 -28.19711,6.81399 -31.39867,-117.62586 z'
        />
        <path
          id='lot-28'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 242.74216,59.23529 31.39868,117.62586 -28.04249,7.1492 -31.83586,-117.5218 z'
        />
        <path
          id='lot-29'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 246.09832,184.01035 -18.65913,5.70167 -46.04462,-113.8157 c 9.79013,-3.71884 20.7461,-6.85476 32.86793,-9.40777 z'
        />
        <path
          id='lot-30'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 181.39458,75.89632 46.04463,113.8157 -11.01775,3.07897 -74.02495,-93.39093 c 10.66766,-9.29189 23.66705,-17.12647 38.99807,-23.50374 z'
        />
        <path
          id='lot-31'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 142.39647,99.40006 74.02499,93.39093 -15.00493,4.62691 -90.20106,-64.99002 c 7.47675,-11.89067 17.87502,-22.88595 31.181,-33.02782 z'
        />
        <path
          id='lot-32'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 111.21547,132.42788 90.20107,64.99002 -47.63997,12.17401 -65.936839,-42.16425 c 6.334601,-10.50074 14.126489,-22.16733 23.375739,-34.99978 z'
        />
        <path
          id='lot-33'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='M 87.839746,167.42767 153.77659,209.59191 137.6687,233.16545 72.824851,191.8593 Z'
        />
        <path
          id='lot-34'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 72.824851,191.8593 64.843849,41.30615 -15.282,23.99774 -65.281108,-41.86516 z'
        />
        <path
          id='lot-35'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 40.227494,240.88174 16.878098,-25.58371 65.281108,41.86516 -16.22229,24.71513 z'
        />
        <path
          id='lot-36'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 40.227494,240.88174 65.936916,40.99658 -16.376881,25.80079 -65.06248,-44.16196 z'
        />
        <path
          id='lot-37'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 161.43813,332.52678 -21.20571,6.37888 -50.444891,-31.22655 44.485851,-69.18194 z'
        />
        <path
          id='lot-38'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 189.3123,324.05742 -27.87417,8.46936 -27.16475,-94.02961 19.50321,-28.90526 5.79819,-1.48168 z'
        />
        <path
          id='lot-39'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 189.3123,324.05742 -29.73752,-115.94719 36.96552,-9.42274 21.28296,119.36313 z'
        />
        <path
          id='lot-40'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='M 217.82326,318.05062 196.5403,198.68749 231.28699,188.45196 253.20598,311.98562 Z'
        />
        <path
          id='lot-41'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 281.52073,306.50335 -28.31475,5.48227 -21.91899,-123.53366 28.8326,-8.01622 z'
        />
        <path
          id='lot-42'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 281.52073,306.50335 -21.40114,-126.0676 33.14751,-8.29317 22.59458,127.96139 z'
        />
        <path
          id='lot-43'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 344.36009,294.42814 -28.49841,5.67583 -22.59458,-127.96139 9.0708,-2.09543 15.21373,-16.75178 z'
        />
        <path
          id='lot-44'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 372.41015,289.3714 -28.05006,5.05675 -26.80846,-141.13278 26.14329,-27.18114 z'
        />
        <path
          id='lot-45'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='M 372.41015,289.3714 343.69492,126.11423 368.42706,99.48081 401.33744,283.98167 Z'
        />
        <path
          id='lot-46'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 430.08907,278.58484 -28.75163,5.39683 -32.91038,-184.50086 4.2292,-4.55926 26.68643,5.17765 z'
        />
        <path
          id='lot-47'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 457.47832,273.74851 -27.38928,4.83633 -30.74638,-178.48564 29.86243,5.15632 z'
        />
        <path
          id='lot-48'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 486.67227,268.23184 -29.19395,5.51668 -28.27322,-168.49299 30.1214,5.67781 z'
        />
        <path
          id='lot-49'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 515.30949,263.10744 -28.63722,5.1244 -27.34577,-157.2985 31.41948,5.73299 z'
        />
        <path
          id='lot-50'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 544.08074,258.0989 -28.77127,5.00854 -24.56351,-146.44111 29.69864,5.20951 z'
        />
        <path
          id='lot-51'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 578.60845,252.57474 -34.52769,5.52416 -23.63614,-136.22306 37.61914,6.84382 z'
        />
        <path
          id='lot-52'
          className='lot'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 619.13747,245.71695 -40.52902,6.85778 -20.54469,-123.85507 42.69302,7.66712 z'
        />
        <path
          id='pond'
          style={{ fill: '#CBDF88', stroke: '#4b5563', strokeWidth: 1.51038 }}
          d='m 969.78205,279.191 -350.64458,-33.47405 -18.38069,-109.33017 50.8679,9.70895 z'
        />
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '18.306px',
            fontFamily: 'Calibri',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.362083,
            strokeOpacity: 1
          }}
          x='1057.5931'
          y='170.81895'
          id='text62'>
          <tspan
            id='tspan62'
            x='1057.5931'
            y='170.81895'
            style={{ strokeWidth: 0.362083 }}>
            1
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '18.1841px',
            fontFamily: 'Calibri',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.359671,
            strokeOpacity: 1
          }}
          x='1032.3699'
          y='164.82018'
          id='text62-0'>
          <tspan
            id='tspan62-1'
            x='1032.3699'
            y='164.82018'
            style={{ strokeWidth: 0.359671 }}>
            2
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.355203,
            strokeOpacity: 1
          }}
          x='1004.2029'
          y='158.67336'
          id='text62-5'>
          <tspan
            id='tspan62-0'
            x='1004.2029'
            y='158.67336'
            style={{ strokeWidth: 0.355203 }}>
            3
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '18.2517px',
            fontFamily: 'Calibri',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.361007,
            strokeOpacity: 1
          }}
          x='975.08417'
          y='152.76608'
          id='text62-4'>
          <tspan
            id='tspan62-7'
            x='975.08417'
            y='152.76608'
            style={{ strokeWidth: 0.361007 }}>
            4
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '18.1841px',
            fontFamily: 'Calibri',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.359671,
            strokeOpacity: 1
          }}
          x='947.31793'
          y='146.25755'
          id='text62-3'>
          <tspan
            id='tspan62-5'
            x='947.31793'
            y='146.25755'
            style={{ strokeWidth: 0.359671 }}>
            5
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9845px',
            fontFamily: 'Calibri',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.355723,
            strokeOpacity: 1
          }}
          x='918.8786'
          y='140.2612'
          id='text62-2'>
          <tspan
            id='tspan62-01'
            x='918.8786'
            y='140.2612'
            style={{ strokeWidth: 0.355723 }}>
            6
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '18.3333px',
            fontFamily: 'Calibri',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.362623,
            strokeOpacity: 1
          }}
          x='890.26929'
          y='134.35333'
          id='text62-40'>
          <tspan
            id='tspan62-6'
            x='890.26929'
            y='134.35333'
            style={{ strokeWidth: 0.362623 }}>
            7
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.355203,
            strokeOpacity: 1
          }}
          x='861.70087'
          y='128.2617'
          id='text62-8'>
          <tspan
            id='tspan62-9'
            x='861.70087'
            y='128.2617'
            style={{ strokeWidth: 0.355203 }}>
            8
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='833.18994'
          y='122.26172'
          id='text62-41'>
          <tspan
            id='tspan62-4'
            x='833.18994'
            y='122.26172'
            style={{ strokeWidth: 0.355203 }}>
            9
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='799.80835'
          y='116.26173'
          id='text62-9'>
          <tspan
            id='tspan62-8'
            x='799.80835'
            y='116.26173'
            style={{ strokeWidth: 0.355203 }}>
            10
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '18.306px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',
            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.362083,
            strokeOpacity: 1
          }}
          x='770.61163'
          y='110.40737'
          id='text62-08'>
          <tspan
            id='tspan62-77'
            x='770.61163'
            y='110.40737'
            style={{ strokeWidth: 0.362083 }}>
            11
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '18.306px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',
            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: 0.359671,
            strokeOpacity: 1
          }}
          x='743.20557'
          y='104.40859'
          id='text62-38'>
          <tspan
            id='tspan62-3'
            x='743.20557'
            y='104.40859'
            style={{ strokeWidth: 0.359671 }}>
            12
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='716.26013'
          y='98.261757'
          id='text62-1'>
          <tspan
            id='tspan62-07'
            x='716.26013'
            y='98.261757'
            style={{ strokeWidth: 0.355203 }}>
            13
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.360472',
            strokeOpacity: 1
          }}
          x='684.32202'
          y='92.354828'
          id='text62-49'>
          <tspan
            id='tspan62-65'
            x='684.32202'
            y='92.354828'
            style={{ strokeWidth: 0.360472 }}>
            14
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.357555',
            strokeOpacity: 1
          }}
          x='655.14331'
          y='86.259605'
          id='text62-09'>
          <tspan
            id='tspan62-96'
            x='655.14331'
            y='86.259605'
            style={{ strokeWidth: 0.357555 }}>
            15
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355723',
            strokeOpacity: 1
          }}
          x='623.61487'
          y='80.261299'
          id='text62-34'>
          <tspan
            id='tspan62-84'
            x='623.61487'
            y='80.261299'
            style={{ strokeWidth: 0.355723 }}>
            16
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.360472',
            strokeOpacity: 1
          }}
          x='594.74127'
          y='74.354836'
          id='text62-92'>
          <tspan
            id='tspan62-55'
            x='594.74127'
            y='74.354836'
            style={{ strokeWidth: 0.360472 }}>
            17
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='566.66095'
          y='68.261772'
          id='text62-33'>
          <tspan
            id='tspan62-74'
            x='566.66095'
            y='68.261772'
            style={{ strokeWidth: 0.355203 }}>
            18
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='537.63922'
          y='61.629013'
          id='text62-80'>
          <tspan
            id='tspan62-88'
            x='537.63922'
            y='61.629013'
            style={{ strokeWidth: 0.355203 }}>
            19
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='501.35724'
          y='55.629028'
          id='text62-6'>
          <tspan
            id='tspan62-81'
            x='501.35724'
            y='55.629028'
            style={{ strokeWidth: 0.355203 }}>
            20
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.359671',
            strokeOpacity: 1
          }}
          x='453.6893'
          y='48.544907'
          id='text62-89'>
          <tspan
            id='tspan62-72'
            x='453.6893'
            y='48.544907'
            style={{ strokeWidth: 0.359671 }}>
            21
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.359671',
            strokeOpacity: 1
          }}
          x='406.6304'
          y='46.209667'
          id='text62-82'>
          <tspan
            id='tspan62-89'
            x='406.6304'
            y='46.209667'
            style={{ strokeWidth: 0.359671 }}>
            22
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='374.57495'
          y='56.06282'
          id='text62-7'>
          <tspan
            id='tspan62-815'
            x='374.57495'
            y='56.06282'
            style={{ strokeWidth: 0.355203 }}>
            23
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.358082',
            strokeOpacity: 1
          }}
          x='338.02023'
          y='64.157425'
          id='text62-61'>
          <tspan
            id='tspan62-2'
            x='338.02023'
            y='64.157425'
            style={{ strokeWidth: 0.358082 }}>
            24
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='310.94138'
          y='72.06282'
          id='text62-25'>
          <tspan
            id='tspan62-86'
            x='310.94138'
            y='72.06282'
            style={{ strokeWidth: 0.355203 }}>
            25
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='284.06549'
          y='79.85965'
          id='text62-65'>
          <tspan
            id='tspan62-39'
            x='284.06549'
            y='79.85965'
            style={{ strokeWidth: 0.355203 }}>
            26
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.358082',
            strokeOpacity: 1
          }}
          x='254.84592'
          y='85.533073'
          id='text62-46'>
          <tspan
            id='tspan62-18'
            x='254.84592'
            y='85.533073'
            style={{ strokeWidth: 0.358082 }}>
            27
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='224.93269'
          y='91.530167'
          id='text62-11'>
          <tspan
            id='tspan62-97'
            x='224.93269'
            y='91.530167'
            style={{ strokeWidth: 0.355203 }}>
            28
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='195.68623'
          y='98.500923'
          id='text62-29'>
          <tspan
            id='tspan62-52'
            x='195.68623'
            y='98.500923'
            style={{ strokeWidth: 0.355203 }}>
            29
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='164.80118'
          y='113.29588'
          id='text62-03'>
          <tspan
            id='tspan62-91'
            x='164.80118'
            y='113.29588'
            style={{ strokeWidth: 0.355203 }}>
            30
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='134.95341'
          y='138.26169'
          id='text62-19'>
          <tspan
            id='tspan62-53'
            x='134.95341'
            y='138.26169'
            style={{ strokeWidth: 0.355203 }}>
            31
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='111.79221'
          y='168.05058'
          id='text62-52'>
          <tspan
            id='tspan62-58'
            x='111.79221'
            y='168.05058'
            style={{ strokeWidth: 0.355203 }}>
            32
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='95.276863'
          y='199.32671'
          id='text62-77'>
          <tspan
            id='tspan62-22'
            x='95.276863'
            y='199.32671'
            style={{ strokeWidth: 0.355203 }}>
            33
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='77.750282'
          y='223.18973'
          id='text62-419'>
          <tspan
            id='tspan62-69'
            x='77.750282'
            y='223.18973'
            style={{ strokeWidth: 0.355203 }}>
            34
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='62.945282'
          y='248.06827'
          id='text62-255'>
          <tspan
            id='tspan62-49'
            x='62.945282'
            y='248.06827'
            style={{ strokeWidth: 0.355203 }}>
            35
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='46.541698'
          y='272.12903'
          id='text62-250'>
          <tspan
            id='tspan62-83'
            x='46.541698'
            y='272.12903'
            style={{ strokeWidth: 0.355203 }}>
            36
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='124.29976'
          y='316.1189'
          id='text62-39'>
          <tspan
            id='tspan62-67'
            x='124.29976'
            y='316.1189'
            style={{ strokeWidth: 0.355203 }}>
            37
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='158.87595'
          y='306.6687'
          id='text62-97'>
          <tspan
            id='tspan62-693'
            x='158.87595'
            y='306.6687'
            style={{ strokeWidth: 0.355203 }}>
            38
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='189.41011'
          y='300.6687'
          id='text62-76'>
          <tspan
            id='tspan62-658'
            x='189.41011'
            y='300.6687'
            style={{ strokeWidth: 0.355203 }}>
            39
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='221.43127'
          y='293.88187'
          id='text62-54'>
          <tspan
            id='tspan62-41'
            x='221.43127'
            y='293.88187'
            style={{ strokeWidth: 0.360472 }}>
            40
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.360472',
            strokeOpacity: 1
          }}
          x='253.61345'
          y='287.97495'
          id='text62-16'>
          <tspan
            id='tspan62-33'
            x='253.61345'
            y='287.97495'
            style={{ strokeWidth: 0.360472 }}>
            41
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.358082',
            strokeOpacity: 1
          }}
          x='285.69516'
          y='281.9765'
          id='text62-53'>
          <tspan
            id='tspan62-28'
            x='285.69516'
            y='281.9765'
            style={{ strokeWidth: 0.358082 }}>
            42
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='317.56546'
          y='275.88187'
          id='text62-536'>
          <tspan
            id='tspan62-186'
            x='317.56546'
            y='275.88187'
            style={{ strokeWidth: 0.355203 }}>
            43
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.361007',
            strokeOpacity: 1
          }}
          x='344.70871'
          y='270.22171'
          id='text62-14'>
          <tspan
            id='tspan62-62'
            x='344.70871'
            y='270.22171'
            style={{ strokeWidth: 0.361007 }}>
            44
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.358082',
            strokeOpacity: 1
          }}
          x='371.78296'
          y='264.12634'
          id='text62-15'>
          <tspan
            id='tspan62-03'
            x='371.78296'
            y='264.12634'
            style={{ strokeWidth: 0.358082 }}>
            45
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355723',
            strokeOpacity: 1
          }}
          x='399.8222'
          y='258.12848'
          id='text62-492'>
          <tspan
            id='tspan62-93'
            x='399.8222'
            y='258.12848'
            style={{ strokeWidth: 0.355723 }}>
            46
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.361007',
            strokeOpacity: 1
          }}
          x='428.12918'
          y='252.22168'
          id='text62-405'>
          <tspan
            id='tspan62-963'
            x='428.12918'
            y='252.22168'
            style={{ strokeWidth: 0.361007 }}>
            47
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='456.60458'
          y='246.12894'
          id='text62-28'>
          <tspan
            id='tspan62-87'
            x='456.60458'
            y='246.12894'
            style={{ strokeWidth: 0.355203 }}>
            48
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='487.01968'
          y='240.12895'
          id='text62-81'>
          <tspan
            id='tspan62-25'
            x='487.01968'
            y='240.12895'
            style={{ strokeWidth: 0.355203 }}>
            49
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='515.49353'
          y='234.12897'
          id='text62-44'>
          <tspan
            id='tspan62-44'
            x='515.49353'
            y='234.12897'
            style={{ strokeWidth: 0.355203 }}>
            50
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.357555',
            strokeOpacity: 1
          }}
          x='546.49536'
          y='228.12682'
          id='text62-293'>
          <tspan
            id='tspan62-077'
            x='546.49536'
            y='228.12682'
            style={{ strokeWidth: 0.357555 }}>
            51
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '17.9582px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',

            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeWidth: '0.355203',
            strokeOpacity: 1
          }}
          x='583.78351'
          y='222.12898'
          id='text62-73'>
          <tspan
            id='tspan62-038'
            x='583.78351'
            y='222.12898'
            style={{ strokeWidth: 0.355203 }}>
            52
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            fontStyle: 'normal',
            fontVariant: 'normal',
            fontWeight: 300,
            fontStretch: 'normal',
            fontSize: '50.5576px',
            fontFamily: 'Calibri',
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontVariantEastAsian: 'normal',
            textAlign: 'start',
            direction: 'ltr',
            textAnchor: 'start',
            fill: '#000000',
            fillOpacity: 0,
            stroke: '#000000',
            strokeOpacity: 1
          }}
          x='464.4964'
          y='208.45567'
          id='text63'>
          <tspan id='tspan63' x='464.4964' y='208.45567' />
        </text>
      </svg>
    </div>
  )
}
