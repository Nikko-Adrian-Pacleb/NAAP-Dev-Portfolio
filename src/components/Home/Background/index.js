import { React, useState, useEffect } from 'react'
import './index.scss'

function Background() {
  const sensorRadius = 500
  const [lights, setLights] = useState(
    <g className="lights">
      <path
        fill="#fff"
        d="M266.35 514.55v9.98l-14 4.98v-9.79l14-5.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 507.54v10.24l-14 4.97v-10.04l14-5.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 500.16v10.51l-15 5.33v-10.3l15-5.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 493.15v10.76l-14 4.98v-10.58l14-5.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 485.4v11.04l-16 5.69V491.3l16-5.9Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 477.19v11.69l-16 5.69V483.1l16-5.91Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 469.27v11.98l-16 5.68v-11.77l16-5.89Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 461.04v11.94l-16 5.69v-11.73l16-5.9Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 451.07v12.31l-18 6.4v-12.06l18-6.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 441.48v12.65l-18 6.4v-12.41l18-6.64Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 431.51v13.03l-18 6.4v-12.78l18-6.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 534.94v9.98l-14 4.59v-9.79l14-4.78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 528.45v10.24l-14 4.59v-10.05l14-4.78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 521.62v10.51l-15 4.92v-10.31l15-5.12Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 515.13v10.77l-14 4.59v-10.58l14-4.78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 507.96v11.05l-16 5.25v-10.83l16-5.47Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 500.36v11.69l-16 5.24v-11.47l16-5.46Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 493.02V505l-16 5.25v-11.76l16-5.47Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 485.43v11.93l-16 5.25v-11.72l16-5.46Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 476.21v12.29l-18 5.91v-12.06l18-6.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 467.33v12.65l-18 5.9v-12.41l18-6.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 458.11v13.01l-18 5.91v-12.78l18-6.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 555.33v9.97l-14 4.21v-9.79l14-4.39Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 549.36v10.24l-14 4.2v-10.04l14-4.4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 543.08v10.51l-15 4.51v-10.31l15-4.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 537.12v10.76l-14 4.21v-10.58l14-4.39Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 530.53v11.04l-16 4.81v-10.83l16-5.02Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 523.52v11.69l-16 4.81v-11.48l16-5.02Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 516.78v11.99l-16 4.8V521.8l16-5.02Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 509.81v11.94l-16 4.8v-11.72l16-5.02Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 501.33v12.31l-18 5.4v-12.06l18-5.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 493.17v12.66l-18 5.4v-12.41l18-5.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 484.69v13.03l-18 5.4v-12.78l18-5.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 575.71v9.98l-14 3.82v-9.79l14-4.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 570.27v10.24l-14 3.82v-10.05l14-4.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 564.54v10.51l-15 4.09v-10.3l15-4.3Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 559.1v10.77l-14 3.82v-10.58l14-4.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 553.09v11.05l-16 4.36v-10.83l16-4.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 546.69v11.69l-16 4.36v-11.47l16-4.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 540.54v11.98l-16 4.37v-11.78l16-4.57Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 534.19v11.94l-16 4.37v-11.73l16-4.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 526.46v12.3l-18 4.91v-12.06l18-5.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 519.01v12.66l-18 4.91v-12.41l18-5.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 511.28v13.02l-18 4.91v-12.77l18-5.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 596.1v9.98l-14 3.43v-9.79l14-3.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 591.18v10.24l-14 3.43V594.8l14-3.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 586.01v10.5l-15 3.68v-10.3l15-3.88Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 581.09v10.76l-14 3.44v-10.58l14-3.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 575.66v11.04l-16 3.93V579.8l16-4.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 569.86v11.69l-16 3.91v-11.47l16-4.13Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 564.29v11.99l-16 3.92v-11.77l16-4.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 558.58v11.94l-16 3.92v-11.72l16-4.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 551.59v12.31l-18 4.41v-12.06l18-4.66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 544.86v12.66l-18 4.41v-12.41l18-4.66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 537.88v13.02l-18 4.41v-12.78l18-4.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 616.48v9.98l-14 3.05v-9.79l14-3.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 612.09v10.24l-14 3.04v-10.04l14-3.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 607.47v10.5l-15 3.27v-10.31l15-3.46Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 603.07v10.77l-14 3.04v-10.57l14-3.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 598.22v11.05l-16 3.48v-10.83l16-3.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 593.01v11.69l-16 3.49v-11.48l16-3.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 588.05v11.99l-16 3.47v-11.77l16-3.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 582.96v11.94l-16 3.48v-11.72l16-3.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 576.72v12.3l-18 3.92v-12.06l18-4.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 570.71v12.65l-18 3.92v-12.41l18-4.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 564.46v13.03l-18 3.91v-12.78l18-4.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 636.87v9.98l-14 2.66v-9.79l14-2.85Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 633v10.24l-14 2.66v-10.05l14-2.85Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 628.93v10.5l-15 2.86v-10.31l15-3.05Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 625.06v10.76l-14 2.66v-10.57l14-2.85Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 620.78v11.05l-16 3.04v-10.83l16-3.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 616.18v11.69l-16 3.04v-11.47l16-3.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 611.8v11.98l-16 3.05v-11.77l16-3.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 607.35v11.93l-16 3.04V610.6l16-3.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 601.85v12.3l-18 3.42v-12.06l18-3.66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 596.56v12.65l-18 3.42v-12.41l18-3.66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 591.06v13.01l-18 3.42v-12.77l18-3.66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 657.26v9.97l-14 2.28v-9.79l14-2.46Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 653.91v10.24l-14 2.27v-10.04l14-2.47Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 650.39v10.51l-15 2.43v-10.3l15-2.64Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 647.04v10.77l-14 2.27v-10.57l14-2.47Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 643.35v11.05l-16 2.6v-10.84l16-2.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 639.35v11.69l-16 2.59v-11.47l16-2.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 635.56v11.99l-16 2.6v-11.77l16-2.82Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 631.73v11.94l-16 2.6v-11.72l16-2.82Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 626.98v12.3l-18 2.93v-12.07l18-3.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 622.4v12.66l-18 2.92v-12.41l18-3.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 617.64v13.03l-18 2.92v-12.78l18-3.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 677.64v9.98l-14 1.89v-9.79l14-2.08Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 674.82v10.24l-14 1.89V676.9l14-2.08Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 671.85v10.51l-15 2.02v-10.3l15-2.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 669.03v10.76l-14 1.89v-10.57l14-2.08Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 665.91v11.05l-16 2.16v-10.83l16-2.38Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 662.51v11.68l-16 2.17v-11.48l16-2.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 659.32v11.99l-16 2.15v-11.77l16-2.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 656.12v11.93l-16 2.16v-11.72l16-2.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 652.11v12.3l-18 2.43v-12.06l18-2.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 648.25v12.65l-18 2.43v-12.41l18-2.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 644.24v13.01l-18 2.43v-12.77l18-2.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 698.03v9.98l-14 1.5v-9.79l14-1.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 695.73v10.24l-14 1.5v-10.05l14-1.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 693.31v10.51l-15 1.61v-10.3l15-1.82Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 691.02v10.76l-14 1.5v-10.57l14-1.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 688.48v11.05l-16 1.71v-10.83l16-1.93Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 685.68v11.68l-16 1.72v-11.47l16-1.93Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 683.07v11.99l-16 1.72V685l16-1.93Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 680.5v11.94l-16 1.72v-11.73l16-1.93Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 677.23v12.31l-18 1.93v-12.06l18-2.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 674.09v12.66l-18 1.93v-12.41l18-2.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 670.83v13.02l-18 1.93V673l18-2.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 718.41v9.98l-14 1.12v-9.79l14-1.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 716.64v10.24l-14 1.11v-10.04l14-1.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 714.78v10.5l-15 1.2v-10.31l15-1.39Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 713v10.76l-14 1.12v-10.57l14-1.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 711.04v11.05l-16 1.27v-10.82l16-1.5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 708.85v11.68l-16 1.27v-11.47l16-1.48Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 706.83v11.99l-16 1.27v-11.76l16-1.5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 704.89v11.93l-16 1.28v-11.72l16-1.49Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 702.37v12.3l-18 1.43v-12.05l18-1.68Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 699.94v12.65l-18 1.44v-12.41l18-1.68Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 697.42v13.02l-18 1.43V699.1l18-1.68Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 738.8v9.98l-14 .73v-9.79l14-.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 737.55v10.24l-14 .73v-10.05l14-.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 736.24v10.5l-15 .78v-10.3l15-.98Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 734.99v10.76l-14 .73v-10.57l14-.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 733.61v11.04l-16 .84v-10.83l16-1.05Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 732.01v11.68l-16 .84v-11.47l16-1.05Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 730.6v11.97l-16 .84v-11.77l16-1.04Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 729.27v11.93l-16 .84v-11.71l16-1.06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 727.5v12.29l-18 .94v-12.05l18-1.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 725.79v12.64l-18 .94v-12.4l18-1.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 724.02v13l-18 .94V725.2l18-1.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 759.19v9.97l-14 .35v-9.79l14-.53Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 758.46v10.24l-14 .34V759l14-.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 757.7v10.5l-15 .37v-10.3l15-.57Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 756.97v10.77l-14 .34v-10.57l14-.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 756.17v11.05l-16 .39v-10.83l16-.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 755.17v11.69l-16 .39v-11.47l16-.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 754.34v11.99l-16 .4v-11.78l16-.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 753.66v11.93l-16 .39v-11.71l16-.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 752.63v12.29l-18 .45v-12.06l18-.68Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 751.63v12.65l-18 .45v-12.41l18-.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 750.6v13.02l-18 .44v-12.77l18-.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 779.7v10.15l-14-.04v-9.96l14-.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 779.7v10.15l-14-.04v-9.96l14-.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 779.7v10.15l-15-.04v-9.96l15-.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 778.69v11.16l-14-.04v-10.96l14-.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 778.68v11.17l-16-.05v-10.95l16-.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 778.69v11.16l-16-.04v-10.96l16-.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 778.69v11.16l-16-.05v-10.95l16-.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 777.68v12.17l-16-.04v-11.96l16-.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 777.66v12.19l-18-.05v-11.95l18-.19Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 777.67v12.18l-18-.06v-11.94l18-.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 776.66v13.19l-18-.05v-12.95l18-.19Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 800.09v9.98l-14-.43v-9.79l14 .24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M285.35 800.09v10.24l-14-.43v-10.05l14 .24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M305.35 801.1v10.51l-15-.46v-10.3l15 .25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M324.35 801.09v10.76l-14-.43v-10.57l14 .24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M345.35 801.12v11.05l-16-.49v-10.83l16 .27Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M366.35 802.12v11.33l-16-.47v-11.13l16 .27Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M388.35 802.11v11.63l-16-.47v-11.42l16 .26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M411.35 802.43v11.93l-16-.49v-11.72l16 .28Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M438.35 803.15v12.3l-18-.55v-12.05l18 .3Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M464.35 803.16v12.65l-18-.55v-12.41l18 .31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M491.35 804.16v13.01l-18-.55v-12.77l18 .31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M266.35 820.34v9.98l-14-.81v-9.79l14 .62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 429.3v13.81l-22-4.4v-13.99l22 4.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 436.5v13.35l-25-5V431.3l25 5.2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M611.35 443.38v13.46l-25-5v-13.65l25 5.19Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M648.35 451.14v12.98l-28-5.6v-13.2l28 5.82Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M681.35 458.01v12.71l-24-4.8v-12.9l24 4.99Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M711.35 464.25v12.47l-21-4.2v-12.64l21 4.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 455.96v11.54l-22-4.09v-11.69l22 4.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 462.61v11.16l-25-4.65V457.8l25 4.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M611.35 469.01v11.24l-25-4.65v-11.4l25 4.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M648.35 476.18v10.83l-28-5.2v-11.02l28 5.39Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M681.35 482.53v10.61l-24-4.46v-10.77l24 4.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M711.35 488.78v7.26l-7.22 1.81h-.01l-13.77-2.56v-10.55l21 4.04Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 482.62v13.69l-22-3.72v-13.87l22 3.9Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 488.76V502l-25-4.23v-13.44l25 4.43Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M611.35 494.6v13.33l-25-4.22v-13.54l25 4.43Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M648.35 501.1v10.12l-6.54 1.63h-.01l-21.45-3.63v-13.08l28 4.96Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m672.01 505.41-14.66 3.66v-6.26l14.66 2.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 509.27v12.52l-22-3.39v-12.68l22 3.55Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 514.88v12.11l-25-3.87v-12.28l25 4.04Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M611.35 520.24v.33l-25 6.25v-10.61l25 4.03Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 535.93v12.46l-22-3.05v-12.62l22 3.21Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 541.01v12.04l-25-3.47v-12.22l25 3.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 562.59v11.29l-22-2.73v-11.43l22 2.87Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 567.13v10.91l-25-3.1v-11.07l25 3.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 589.25v11.23l-22-2.39v-11.37l22 2.53Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 593.27v10.84l-25-2.71v-11.01l25 2.88Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 616.9v12.39l-22-2.02v-12.55l22 2.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 620.37v11.98l-25-2.3v-12.16l25 2.48Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 643.56v13.43l-22-1.67v-13.6l22 1.84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 646.51v12.97l-25-1.89v-13.17l25 2.09Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 670.22v12.26l-22-1.34v-12.42l22 1.5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 672.63v11.84l-25-1.51v-12.04l25 1.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 696.88v12.19l-22-1v-12.35l22 1.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 698.75v11.8l-25-1.15v-11.96l25 1.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 723.54v13.24l-22-.65v-13.41l22 .82Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 724.89v12.8l-25-.74v-12.98l25 .92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 750.67v13.18l-22-.31v-13.35l22 .48Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 750.93v12.92l-25-.36v-13.11l25 .55Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 776.98v13.87l-22 .05v-14.05l22 .13Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 777v13.85l-25 .05v-14.05l25 .15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M543.35 805.62v12.18l-22 .39v-12.34l22-.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M577.35 805.59v11.94l-25 .45v-12.13l25-.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 420.63v7.95l-10 6.45v-7.81l10-6.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 410.74v8.17l-11 7.09v-8.01l11-7.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 398.87v8.43l-14 9.03v-8.23l14-9.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 386.35v8.7l-15 9.68v-8.5l15-9.88Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 371.88v8.97l-17 10.97v-8.73l17-11.21Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 436.92v7.95l-10 6.16v-7.81l10-6.3Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 427.47v8.17l-11 6.77v-8.01l11-6.93Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 416.13v8.42l-14 8.62v-8.22l14-8.82Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 404.16v8.71l-15 9.23v-8.49l15-9.45Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 390.34v8.97l-17 10.47v-8.73l17-10.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 453.21v7.96l-10 5.86v-7.81l10-6.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 444.2v8.17l-11 6.45v-8.01l11-6.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 433.39v8.42l-14 8.21v-8.22l14-8.41Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 421.98v8.7l-15 8.8v-8.49l15-9.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 408.8v8.97l-17 9.97v-8.73l17-10.21Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 469.51v7.95l-10 5.57v-7.81l10-5.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 460.93v8.17l-11 6.13v-8.01l11-6.29Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 450.65v8.43l-14 7.8v-8.23l14-8Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 439.79v8.72l-15 8.35v-8.5l15-8.57Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 427.26v8.98l-17 9.47v-8.74l17-9.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 485.8v7.95l-10 5.28v-7.81l10-5.42Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 477.67v8.16l-11 5.81v-8.01l11-5.96Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 467.91v8.42l-14 7.39v-8.22l14-7.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 457.61v8.7l-15 7.92v-8.49l15-8.13Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 445.72v8.97l-17 8.97v-8.73l17-9.21Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 502.09v7.95l-10 4.99v-7.81l10-5.13Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 494.4v8.17l-11 5.48v-8.01l11-5.64Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 485.17v8.42l-14 6.98v-8.22l14-7.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 475.42v8.71l-15 7.48v-8.49l15-7.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 464.18v8.97l-17 8.47v-8.73l17-8.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 518.38v7.96l-10 4.69v-7.81l10-4.84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 511.13v8.17l-11 5.16v-8.01l11-5.32Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 502.43v8.43l-14 6.56v-8.22l14-6.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 493.24v8.71l-15 7.04v-8.5l15-7.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 482.63v8.99l-17 7.97v-8.74l17-8.22Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 534.68v7.95l-10 4.4v-7.81l10-4.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 527.86v8.17l-11 4.84v-8.01l11-5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 519.69v8.42l-14 6.16v-8.22l14-6.36Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 511.05v8.71l-15 6.6v-8.49l15-6.82Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 501.09v8.98l-17 7.48v-8.74l17-7.72Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 550.97v7.95l-10 4.11v-7.81l10-4.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 544.6v8.16l-11 4.52v-8.01l11-4.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 536.95v8.42l-14 5.75v-8.22l14-5.95Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 528.87v8.7l-15 6.17v-8.49l15-6.38Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 519.55v8.98l-17 6.98v-8.74l17-7.22Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 567.26v7.96l-10 3.81v-7.81l10-3.96Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 561.33v8.16l-11 4.2v-8.01l11-4.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 554.2v8.43l-14 5.34v-8.23l14-5.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 546.68v8.71l-15 5.72v-8.49l15-5.94Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 538.01v8.98l-17 6.48v-8.74l17-6.72Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 583.56v7.95l-10 3.52v-7.81l10-3.66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 578.06v8.17l-11 3.87v-8.01l11-4.03Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 571.46v8.43l-14 4.93v-8.23l14-5.13Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 564.5v8.71l-15 5.28V570l15-5.5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 556.47v8.98l-17 5.99v-8.74l17-6.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 599.85v7.95l-10 3.23v-7.81l10-3.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 594.79v8.17l-11 3.55v-8.01l11-3.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 588.72v8.43l-14 4.52v-8.23l14-4.72Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 582.31v8.71l-15 4.85v-8.5l15-5.06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 574.93v8.97l-17 5.49v-8.72l17-5.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 616.14v7.95l-10 2.94v-7.81l10-3.08Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 611.52v8.17l-11 3.23v-8.01l11-3.39Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 605.98v8.43l-14 4.11v-8.23l14-4.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 600.13v8.7l-15 4.41v-8.49l15-4.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 593.39v8.97l-17 4.99v-8.72l17-5.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 632.43v7.96l-10 2.64v-7.81l10-2.79Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 628.26v8.17l-11 2.9v-8.01l11-3.06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 623.24v8.43l-14 3.7v-8.23l14-3.9Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 617.94v8.72l-15 3.96v-8.49l15-4.19Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 611.85v8.98l-17 4.49v-8.73l17-4.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 648.73v7.95l-10 2.35v-7.81l10-2.49Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 644.99v8.17l-11 2.58v-8.01l11-2.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 640.5v8.43l-14 3.29v-8.23l14-3.49Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 635.76v8.71l-15 3.53v-8.5l15-3.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 630.31v8.98l-17 3.99v-8.73l17-4.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 665.02v7.95l-10 2.06v-7.81l10-2.2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 661.72v8.17l-11 2.26v-8.01l11-2.42Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 657.76v8.42l-14 2.88v-8.22l14-3.08Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 653.57v8.71l-15 3.09v-8.49l15-3.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 648.77v8.97l-17 3.49v-8.72l17-3.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 681.31v7.96l-10 1.76v-7.81l10-1.91Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 678.45v8.17l-11 1.94v-8.01l11-2.1Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 675.02v8.43l-14 2.47v-8.23l14-2.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 671.39v8.71l-15 2.65v-8.49l15-2.87Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 667.22v8.99l-17 3v-8.74l17-3.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 697.61v7.95l-10 1.47v-7.81l10-1.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 695.19v8.16l-11 1.62v-8.01l11-1.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 692.28v8.43l-14 2.06v-8.23l14-2.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 689.21v8.71l-15 2.21v-8.49l15-2.43Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 685.69v8.98l-17 2.5v-8.74l17-2.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 713.9v7.95l-10 1.18v-7.81l10-1.32Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 711.92v8.16l-11 1.3v-8.01l11-1.45Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 709.54v8.42l-14 1.65v-8.22l14-1.85Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 707.02v8.71l-15 1.77v-8.49l15-1.99Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 704.14v8.98l-17 2v-8.73l17-2.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 730.19v7.95l-10 .89v-7.81l10-1.03Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 728.65v8.17l-11 .97v-8.01l11-1.13Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 726.8v8.42l-14 1.24v-8.22l14-1.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 724.83v8.71l-15 1.34v-8.49l15-1.56Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 722.6v8.97l-17 1.51v-8.73l17-1.75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 746.48v7.96l-10 .59v-7.81l10-.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 745.38v8.17l-11 .65v-8.01l11-.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 744.06v8.43l-14 .82v-8.22l14-1.03Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 742.65v8.72l-15 .89v-8.5l15-1.11Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 741.06v8.98l-17 1.01v-8.73l17-1.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 762.78v7.95l-10 .3v-7.81l10-.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 762.12v8.16l-11 .33v-8.01l11-.48Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 761.32v8.43l-14 .41v-8.22l14-.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 760.47v8.72l-15 .45v-8.51l15-.66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 759.53v8.97l-17 .51v-8.73l17-.75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 778.7v8.15l-10 .01v-8.01l10-.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 778.69v8.16l-11 .01v-8.01l11-.16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 778.65v8.2l-14 .01v-8.01l14-.2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 778.63v8.22l-15 .01v-8.01l15-.22Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 777.58v9.27l-17 .01v-9.01l17-.27Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 794.99v7.96l-10-.29v-7.81l10 .14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 796.01v8.17l-11-.32v-8.01l11 .16Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 796.05v8.43l-14-.4v-8.23l14 .2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 796.07v8.7l-15-.43v-8.49l15 .22Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 796.09v9.02l-17-.49v-8.77l17 .24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M113.35 811.66v7.95l-10-.58v-7.81l10 .44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M128.35 812.31v8.17l-11-.64v-8.01l11 .48Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M146.35 813.1v8.42l-14-.81v-8.22l14 .61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M165.35 813.92v8.71l-15-.87v-8.5l15 .66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M187.35 814.91v8.97l-17-.99v-8.73l17 .75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 375.03v8.56l-15-3.27v-8.63l15 3.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 380.09v8.25l-17-3.71v-8.33l17 3.79Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M257.35 384.46v8.1l-14-3.05v-8.16l14 3.11Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 393.87v9.15l-15-3.1v-9.23l15 3.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 398.72v8.81l-17-3.53v-8.89l17 3.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M257.35 402.9v8.65l-14-2.9v-8.72l14 2.97Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 411.73v8.69l-15-2.96v-8.77l15 3.04Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 416.35v8.38l-17-3.37v-8.45l17 3.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M257.35 420.35v8.21l-14-2.77v-8.28l14 2.84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 429.59v8.22l-15-2.83v-8.29l15 2.9Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 433.99v7.92l-17-3.2v-7.99l17 3.27Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M257.35 437.79v7.78l-14-2.64v-7.84l14 2.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 448.43v8.83l-15-2.67v-8.9l15 2.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 452.62v8.5l-17-3.03v-8.58l17 3.11Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M257.35 456.22v8.34l-14-2.48v-8.41l14 2.55Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 466.28v9.4l-15-2.52v-9.47l15 2.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 470.26v9.05l-17-2.86v-9.13l17 2.94Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M257.35 473.68v8.88l-14-2.35v-8.95l14 2.42Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 485.13v8.96l-15-2.37v-9.03l15 2.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 488.88v8.62l-17-2.68v-8.71l17 2.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M257.35 492.1v8.47l-14-2.22v-8.54l14 2.29Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 502.99v8.5l-15-2.23v-8.57l15 2.3Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 506.52v8.18l-17-2.53v-8.26l17 2.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m249.52 508.2-6.17 2.46v-3.41l6.17.95Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 521.84v8.06l-15-2.08v-8.13l15 2.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 525.13v7.76l-17-2.36v-7.83l17 2.43Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 539.69v8.63l-15-1.93v-8.7l15 2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 542.78v8.31l-17-2.19v-8.39l17 2.27Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 558.54v8.2l-15-1.78v-8.27l15 1.85Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 561.4v7.89l-17-2.02v-7.97l17 2.1Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 576.4v8.76l-15-1.64v-8.83l15 1.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 579.05v8.42l-17-1.85v-8.51l17 1.94Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 595.25v8.33l-15-1.49v-8.4l15 1.56Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 597.66v8.02l-17-1.69v-8.09l17 1.76Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 613.1v8.9l-15-1.34v-8.97l15 1.41Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 615.31v8.57l-17-1.52v-8.65l17 1.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 631.95v8.46l-15-1.19v-8.53l15 1.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 633.93v8.14l-17-1.35v-8.22l17 1.43Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 649.81v9.02l-15-1.04v-9.1l15 1.12Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 651.58v8.68l-17-1.18v-8.77l17 1.27Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 667.66v8.57l-15-.91v-8.63l15 .97Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 669.21v8.24l-17-1.02v-8.31l17 1.09Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 686.51v9.16l-15-.75v-9.23l15 .82Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 687.84v8.81l-17-.84v-8.9l17 .93Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 704.37v9.72l-15-.6v-9.8l15 .68Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 705.48v9.37l-17-.68v-9.45l17 .76Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 723.22v9.28l-15-.45v-9.36l15 .53Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 724.1v8.94l-17-.5v-9.03l17 .59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 741.07v8.82l-15-.3v-8.89l15 .37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 741.73v8.51l-17-.34v-8.59l17 .42Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 760.08v8.77l-15-.16v-8.84l15 .23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 760.11v8.74l-17-.19v-8.81l17 .26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 777.93v8.92l-15-.01v-8.99l15 .08Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 777.94v8.91h-17v-9l17 .09Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 794.79v11.06l-15 .14v-11.14l15-.06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 794.79v11.06l-17 .18v-11.18l17-.06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M216.35 815.62v9.07l-15 .3v-9.14l15-.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M238.35 815.59v8.95l-17 .35v-9.04l17-.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 516.82v6.98l-4 2.18v-6.91l4-2.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 509.85v6.68l-9 4.92v-6.56l9-5.04Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 502v6.86l-10 5.47v-6.72l10-5.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 494.67v7.27l-9 4.92v-7.14l9-5.05Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 485.33v7.57l-13 7.1v-7.39l13-7.28Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 528.93v6.96l-4 2.08v-6.9l4-2.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 522.27v6.68l-9 4.69v-6.56l9-4.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 514.77v6.86l-10 5.22v-6.72l10-5.36Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 507.77v7.26l-9 4.69v-7.13l9-4.82Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 498.83v7.58l-13 6.78v-7.4l13-6.96Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 541.02v6.96l-4 1.99v-6.91l4-2.04Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 534.69v6.68l-9 4.46v-6.55l9-4.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 527.55v6.85l-10 4.97v-6.72l10-5.1Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 520.87v7.25l-9 4.47v-7.14l9-4.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 512.35v7.56l-13 6.46v-7.38l13-6.64Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 553.12v6.97l-4 1.88v-6.91l4-1.94Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 547.11v6.68l-9 4.24v-6.56l9-4.36Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 540.32v6.86l-10 4.71v-6.72l10-4.85Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 533.95v7.27l-9 4.25v-7.15l9-4.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 525.86v7.57l-13 6.12v-7.39l13-6.3Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 565.22v6.96l-4 1.78v-6.9l4-1.84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 559.53v6.68l-9 4.01v-6.55l9-4.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 553.09v6.86l-10 4.46v-6.72l10-4.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 547.06v7.25l-9 4.02v-7.13l9-4.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 539.37v7.56l-13 5.81v-7.39l13-5.98Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 577.31v6.96l-4 1.69v-6.91l4-1.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 571.95v6.68l-9 3.78v-6.55l9-3.91Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 565.86v6.85l-10 4.22v-6.72l10-4.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 560.14v7.27l-9 3.79v-7.14l9-3.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 552.88v7.57l-13 5.47v-7.38l13-5.66Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 589.41v6.97l-4 1.58v-6.91l4-1.64Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 584.37v6.68l-9 3.56v-6.56l9-3.68Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 578.63v6.85l-10 3.97v-6.71l10-4.11Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 573.24v7.26l-9 3.57v-7.14l9-3.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 566.4v7.56l-13 5.14v-7.38l13-5.32Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 601.51v6.96l-4 1.48v-6.9l4-1.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 596.79v6.68l-9 3.33v-6.55l9-3.46Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 591.4v6.85l-10 3.72v-6.71l10-3.86Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 586.34v7.25l-9 3.34v-7.13l9-3.46Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 579.9v7.56l-13 4.83v-7.39l13-5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 613.61v6.96l-4 1.38v-6.91l4-1.43Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 609.21v6.68l-9 3.1v-6.55l9-3.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 604.18v6.84l-10 3.46v-6.7l10-3.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 599.43v7.25l-9 3.12v-7.14l9-3.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 593.42v7.55l-13 4.5v-7.38l13-4.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 625.7v6.96l-4 1.29v-6.91l4-1.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 621.63v6.68l-9 2.88v-6.56l9-3Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 616.95v6.84l-10 3.22v-6.71l10-3.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 612.52v7.26l-9 2.89v-7.14l9-3.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 606.92v7.57l-13 4.17v-7.39l13-4.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 637.8v6.96l-4 1.19v-6.91l4-1.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 634.05v6.67l-9 2.66v-6.55l9-2.78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 629.72v6.84l-10 2.96v-6.71l10-3.09Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 625.62v7.25l-9 2.66v-7.13l9-2.78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 620.43v7.56l-13 3.85v-7.38l13-4.03Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 649.9v6.96l-4 1.08v-6.91l4-1.13Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 646.47v6.68l-9 2.44v-6.57l9-2.55Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 642.49v6.85l-10 2.71v-6.71l10-2.85Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 638.71v7.26l-9 2.44v-7.14l9-2.56Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 633.95v7.56l-13 3.52v-7.39l13-3.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 661.99v6.96l-4 .99v-6.91l4-1.04Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 658.88v6.68l-9 2.22v-6.56l9-2.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 655.26v6.85l-10 2.45v-6.71l10-2.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 651.8v7.26l-9 2.21v-7.13l9-2.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 647.45v7.56l-13 3.2v-7.39l13-3.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 674.09v6.96l-4 .89v-6.91l4-.94Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 671.31v6.67l-9 1.99v-6.56l9-2.1Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 668.03v6.84l-10 2.21v-6.71l10-2.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 664.9v7.25l-9 1.98V667l9-2.1Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 660.96v7.56l-13 2.87v-7.38l13-3.05Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 686.19v6.96l-4 .78v-6.91l4-.83Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 683.72v6.68l-9 1.77v-6.57l9-1.88Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 680.8v6.85l-10 1.95v-6.71l10-2.09Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 677.98v7.27l-9 1.76v-7.15l9-1.88Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 674.47v7.57l-13 2.54v-7.39l13-2.72Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 700.3v6.96l-4 .67v-6.91l4-.72Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 698.21v6.69l-9 1.49v-6.56l9-1.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 695.7v6.85l-10 1.66v-6.71l10-1.8Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 693.26v7.26l-9 1.51v-7.15l9-1.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 690.23v7.57l-13 2.17v-7.4l13-2.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 712.4v6.96l-4 .56v-6.9l4-.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 710.63v6.68l-9 1.28v-6.57l9-1.39Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 708.48v6.84l-10 1.41v-6.71l10-1.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 706.36v7.26l-9 1.27v-7.13l9-1.4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 703.75v7.56l-13 1.84v-7.38l13-2.02Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 724.49v6.96l-4 .47v-6.91l4-.52Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 723.05v6.68l-9 1.05v-6.56l9-1.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 721.25v6.84l-10 1.16v-6.71l10-1.29Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 719.45v7.26l-9 1.05v-7.14l9-1.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 717.26v7.56l-13 1.5v-7.38l13-1.68Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 737.6v6.96l-4 .36v-6.91l4-.41Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 736.5v6.69l-9 .8v-6.56l9-.93Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 735.08v6.85l-10 .88v-6.71l10-1.02Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 733.63v7.26l-9 .81v-7.14l9-.93Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 731.89v7.56l-13 1.16v-7.39l13-1.33Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 749.7v6.96l-4 .25v-6.9l4-.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 748.92v6.69l-9 .58v-6.57l9-.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 747.85v6.85l-10 .64v-6.72l10-.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 746.73V754l-9 .57v-7.14l9-.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 745.4v7.57l-13 .83v-7.39l13-1.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 762.8v6.96l-4 .15V763l4-.2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 762.37v6.69l-9 .33v-6.56l9-.46Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 761.68v6.85l-10 .37v-6.72l10-.5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 760.91v7.26l-9 .33v-7.14l9-.45Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 760.04v7.56l-13 .47v-7.38l13-.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 776.34v6.51l-4 .04v-6.46l4-.09Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 776.16v6.69l-9 .08v-6.56l9-.21Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 775.97v6.88l-10 .1v-6.74l10-.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 774.81v7.04l-9 .09v-6.93l9-.2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 774.58v7.27l-13 .12v-7.1l13-.29Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 788.86v6.99l-4-.06v-6.94l4 .01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 788.88v6.69l-9-.16v-6.56l9 .03Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 788.89v6.96l-10-.17v-6.83l10 .04Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 789.89v6.96l-9-.15v-6.85l9 .04Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 789.9v7.27l-13-.22v-7.1l13 .05Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 802.12v6.96l-4-.18v-6.91l4 .13Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 802.74v6.68l-9-.4v-6.56l9 .28Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 803.18v6.86l-10-.45v-6.72l10 .31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 803.47v7.26l-9-.4v-7.14l9 .28Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 803.94v7.56l-13-.58v-7.38l13 .4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M4.35 814.21v6.96l-4-.27v-6.91l4 .22Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M17.35 815.16v6.69l-9-.63v-6.57l9 .51Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M31.35 815.95v6.85l-10-.69v-6.72l10 .56Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M44.35 816.56v7.26l-9-.63v-7.13l9 .5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M60.35 817.45v7.57l-13-.9v-7.4l13 .73Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 487.51v7.1l-13-1.75v-7.14l13 1.79Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m98.41 496.38-10.06-1.35v-6.8l10 1.37.06 6.78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 500.43v7.5l-13-1.67v-7.54l13 1.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 502.2v7.79l-11-1.4v-7.84l11 1.45Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 514.35v6.9l-13-1.59v-6.94l13 1.63Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 516.03v7.18l-11-1.34v-7.21l11 1.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 527.27v7.31l-13-1.51v-7.35l13 1.55Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 528.86v7.6l-11-1.28v-7.63l11 1.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 541.19v6.71l-13-1.43v-6.75l13 1.47Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 542.7v6.99l-11-1.22v-7.02l11 1.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 554.09v7.22l-13-1.33v-7.26l13 1.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 555.48v7.51l-11-1.12v-7.56l11 1.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 568.03v7.54l-13-1.26v-7.59l13 1.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 569.34v7.84l-11-1.07v-7.88l11 1.11Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 580.95v7.94l-13-1.18v-7.99l13 1.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 582.17v8.25l-11-.99v-8.31l11 1.05Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 594.87v6.32l-13-1.11v-6.36l13 1.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 596.02v6.58l-11-.94v-6.61l11 .97Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 607.79v7.75l-13-1.02v-7.8l13 1.07Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 608.83v8.06l-11-.87v-8.1l11 .91Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 621.71v7.16l-13-.95v-7.2l13 .99Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 622.66v7.45l-11-.8v-7.49l11 .84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 634.63v7.56l-13-.87v-7.6l13 .91Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 635.49v7.87l-11-.75v-7.9l11 .78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 648.55v6.97l-13-.79v-7.01l13 .83Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 649.32v7.25l-11-.66v-7.29l11 .7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 661.47v7.37l-13-.71v-7.41l13 .75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 662.15v7.67l-11-.61v-7.7l11 .64Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 675.39v6.77l-13-.63v-6.81l13 .67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 675.98v7.05l-11-.53v-7.08l11 .56Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 690.3v7.24l-13-.54v-7.28l13 .58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 690.79v7.53l-11-.46v-7.56l11 .49Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 704.22v7.66l-13-.45v-7.71l13 .5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 704.6v7.98l-11-.39v-8.01l11 .42Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 718.13v7.08l-13-.37v-7.12l13 .41Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 718.44v7.36l-11-.32v-7.39l11 .35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 732.05v7.51l-13-.29v-7.55l13 .33Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 732.25v7.8l-11-.24v-7.84l11 .28Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 745.94v6.91l-13-.2v-6.96l13 .25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 745.97v6.88l-11-.17v-6.91l11 .2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 760.02v7.83l-13-.13v-7.87l13 .17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 759.98v6.87l-11-.09v-6.91l11 .13Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 774.92v7.93l-13-.03v-7.97l13 .07Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 774.91v7.94l-11-.02v-7.98l11 .06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 789.84v8.01l-10 .05v-8.05l10-.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 789.84v8.01l-13 .06v-8.06l13-.01Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 803.74v8.11l-13 .15v-8.15l13-.11Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 803.78v8.07l-11 .12v-8.12l11-.07Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M84.35 817.67v7.18l-13 .22v-7.22l13-.18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M98.35 817.7v7.15l-11 .18v-7.18l11-.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m615.35 396.72 30-10.72v15.17l-30 10.31v-14.76Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 381 27-9.65v15.72l-27 9.28V381Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M733.35 354.56v16.35l-34 11.69v-15.89l34-12.15Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M645.35 416.83v15.16l-3.99 1.26-26.01-5.89v-.64l30-9.89Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 412.21 27-8.91v15.71l-27 8.55v-15.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M733.35 387.8v16.34l-34 10.76v-15.89l34-11.21Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M686.35 435.25v8.2l-15.5-3.51 15.5-4.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M733.35 421.03v16.35l-32.42 9.37-1.58-.35v-15.09l34-10.28Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m757.35 353.59 33 9.5v16.42l-33-9.13v-16.79Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m822.35 372.5-.13 15.18-10.87-3v-15.35l11 3.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m757.35 387.6 33 8.76v15.45l-33-8.42V387.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m822.35 404.81-.13 14.66-10.87-2.77v-14.8l11 2.91Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m757.35 419.6 33 8.06v16l-33-7.7V419.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m821.35 435.25-.13 15.55-10.87-2.54v-15.7l11 2.69Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m757.35 452.61 33 7.33v15.35l-33-7v-15.68Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m821.35 466.63-.13 15.3-10.87-2.31v-15.43l11 2.44Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 540.72 23-5.34v14.65l-23 5.03v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 532.13 24-5.57v15.16l-24 5.25v-14.84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 523.3 28-6.5v15.73l-28 6.13V523.3Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 513.55 29-6.73v16.31l-29 6.34v-15.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 494.56v16.82l-36 7.88v-16.34l36-8.36Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 568.72 23-4.73v14.65l-23 4.42v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 561.1 24-4.94v15.17l-24 4.61V561.1Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 553.28 28-5.76v15.73l-28 5.38v-15.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 544.64 29-5.97v16.31l-29 5.58v-15.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 527.81v16.83l-36 6.93v-16.35l36-7.41Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 596.72 23-4.13v14.65l-23 3.82v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 590.08 24-4.31v15.16l-24 3.99v-14.84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 583.26 28-5.03v15.73l-28 4.65v-15.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 575.72 29-5.21v16.31l-29 4.82v-15.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 561.05v16.83l-36 5.98v-16.34l36-6.47Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 624.72 23-3.52v14.65l-23 3.21v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 619.05 24-3.67v15.16l-24 3.35v-14.84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 613.23 28-4.28v15.73l-28 3.91v-15.36Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 606.8 29-4.44v16.31l-29 4.05V606.8Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 594.31v16.83l-36 5.03v-16.35l36-5.51Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 652.72 23-2.92v14.65l-23 2.61v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 648.03 24-3.04v15.16l-24 2.72v-14.84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 643.21 28-3.55v15.73l-28 3.17v-15.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 637.89 29-3.68v16.31l-29 3.29v-15.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 627.56v16.83l-36 4.08v-16.34l36-4.57Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 680.72 23-2.31v14.65l-23 2v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 677 24-2.41v15.17l-24 2.08V677Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 673.19 28-2.81v15.72l-28 2.44v-15.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 668.97 29-2.91v16.31l-29 2.52v-15.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 660.81v16.83l-36 3.13v-16.35l36-3.61Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 708.72 23-1.7v14.65l-23 1.39v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 705.98 24-1.78v15.17l-24 1.45v-14.84Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 703.17 28-2.08v15.73l-28 1.7v-15.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 700.05 29-2.14v16.31l-29 1.75v-15.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 694.06v16.83l-36 2.18v-16.34l36-2.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 736.72 23-1.1v14.65l-23 .79v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 734.96 24-1.15v15.16l-24 .82v-14.83Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 733.14 28-1.33v15.73l-28 .96v-15.36Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 731.14 29-1.38v16.31l-29 .99v-15.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 727.32v16.83l-36 1.23v-16.34l36-1.72Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 764.69 23-.49v14.65l-23 .18v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 764.2 24-.51v15.16l-24 .19V764.2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 762.72 28-.6v15.73l-28 .22v-15.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 762.15 29-.62v16.32l-29 .22v-15.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 760.81v17.04l-36 .28v-16.54l36-.78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m584.35 792.85 23 .12v14.65l-23-.43v-14.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m621.35 792.85 24 .12v15.16l-24-.45v-14.83Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m659.35 792.85 28 .14v15.73l-28-.52v-15.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m701.35 792.85 29 .14v16.31l-29-.54v-15.91Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M783.35 794.03v17.03l-36-.67v-16.54l36 .18Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 494.72 33 6.67v13.12l-33-6.36v-13.43Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 506.56v13.73l-8-1.55v-13.8l8 1.62Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 527.72 33 5.91v16.2l-33-5.54v-16.57Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 538.08v16.93l-8-1.34v-17.02l8 1.43Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 560.72 33 5.16v16.16l-33-4.79v-16.53Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 569.69v16.91l-8-1.17v-16.99l8 1.25Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 593.72 33 4.41v17.15l-33-4.01v-17.55Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 601.27v17.94l-8-.97v-18.03l8 1.06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 627.72 33 3.64v18.2l-33-3.21v-18.63Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 633.82v19.04l-8-.78v-19.14l8 .88Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 660.72 33 2.89v17.12l-33-2.49v-17.52Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 665.47v17.91l-8-.61v-18l8 .7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 693.72 33 2.13v16.05l-33-1.76v-16.42Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 697.12v16.78l-8-.43v-16.86l8 .51Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 726.72 33 1.38v16l-33-1.01v-16.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 728.74v16.73l-8-.24v-16.82l8 .33Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 761.19 33 .61v17.05l-33-.21v-17.45Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 762.12v16.73l-8-.05v-16.82l8 .14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m815.35 792.85 33-.12v19.12l-33 .56v-19.56Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 791.82v19.03l-8 .13v-19.13l8-.03Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.35 221.72 22-9.48v18.01l-22 9.18v-17.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.35 195.86v18.52l-25 10.44v-18.18l25-10.78Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.35 257.72 22-8.88v18.01l-22 8.58v-17.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.35 233.5v18.52l-25 9.75v-18.18l25-10.09Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.35 293.72 22-8.28v18.01l-22 7.98v-17.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.35 271.15v18.52l-25 9.07v-18.19l25-9.4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.35 329.72 22-7.67v18.01l-22 7.37v-17.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.35 308.79v18.53l-25 8.38v-18.19l25-8.72Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.35 365.72 22-7.07v18.01l-22 6.77v-17.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.35 346.44v18.52l-25 7.7v-18.19l25-8.03Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.35 401.72 22-6.46v18l-22 6.17v-17.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.35 384.09v18.52l-25 7.01v-18.18l25-7.35Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m834.35 437.72 22-5.86v18l-22 5.57v-17.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M894.35 421.6v15.83l-19 4.85v2.59l-7 1.77v-18.12l26-6.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M856.35 468.46v17.31l-22-4.8v-7.25l22-5.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M875.35 463.05v19.67l-7 1.58v-19.58l7-1.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M955.35 215.08v17.56l-36-15.86v-18.07l36 16.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M955.35 251.72v17.56l-36-14.81V236.4l36 15.32Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m919.35 272.34 36 14.31v17.55l-36-13.8v-18.06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M955.35 324.01v17.56l-36-12.73v-18.07l36 13.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m919.35 347.81 36 12.21v17.56l-36-11.71v-18.06Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M955.35 396.32v17.55l-36-10.66v-18.06l36 11.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m934.9 427.11-15.55 3.98v-8.35l15.55 4.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M919.35 422.74v8.35l15.55-3.98-15.55-4.37Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M868.35 428.52v18.12l7-1.77v-2.59l19-4.85V421.6l-26 6.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M868.35 464.72v19.58l7-1.58v-19.67l-7 1.67Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M834.35 473.72v7.25l22 4.8v-17.31l-22 5.26Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 457.62 36-8.68v18.88l-36 8.2v-18.4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 433.7v19.79l-40 9.11v-19.25l40-9.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 493.96 36-7.72v18.89l-36 7.24v-18.41Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 472.68v19.79l-40 8.05v-19.26l40-8.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 530.32 36-6.77v18.88l-36 6.28v-18.39Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 511.66v19.79l-40 6.98v-19.25l40-7.52Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 566.66 36-5.81v18.88l-36 5.32v-18.39Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 550.64v19.78l-40 5.92V557.1l40-6.46Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 603 36-4.86v18.9l-36 4.36V603Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 589.61v19.8l-40 4.86v-19.26l40-5.4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 639.34 36-3.9v18.89l-36 3.41v-18.4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 628.59v19.79l-40 3.79v-19.25l40-4.33Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 675.69 36-2.94v18.88l-36 2.46v-18.4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 667.57v19.79l-40 2.73v-19.25l40-3.27Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 712.03 36-1.98v18.88l-36 1.5v-18.4Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 706.55v19.78l-40 1.67v-19.25l40-2.2Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 747.93 36-1.03v18.95l-36 .54v-18.46Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 745.06v19.79l-40 .6V746.2l40-1.14Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m889.35 784.85 36-.07v19.07l-36-.42v-18.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M988.35 784.77v19.08l-40-.44v-18.56l40-.08Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 436.37 44 12.35v19.07l-44-11.65v-19.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 475.98 44 10.99v19.06l-44-10.29v-19.76Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 514.58 44 9.62v19.06l-44-8.93v-19.75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 553.18 44 8.25v19.07l-44-7.57v-19.75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 591.77 44 6.9v19.07l-44-6.2v-19.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 630.37 44 5.54v19.06l-44-4.83v-19.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 668.97 44 4.18v19.07l-44-3.48v-19.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 707.51 44 2.82v19.06l-44-2.13v-19.75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 746.28 44 1.46v19.11l-44-.76v-19.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1017.35 784.85 44 .1v18.9l-44 .6v-19.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1318.35 68.26v22.28l-43-31.68V35.55l43 32.71Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.35 105.64v21.6l-35-25.79V79.01l35 26.63Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1318.35 113.59v22.28l-43-29.62V82.94l43 30.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.35 148.6v21.6l-35-24.11v-22.44l35 24.95Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1318.35 155.92v22.29l-43-27.58v-23.31l43 28.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.35 188.55v21.61l-35-22.44v-22.44l35 23.27Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1318.35 201.25v22.28l-43-25.51v-23.31l43 26.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.35 231.5v21.61l-35-20.76v-22.44l35 21.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1318.35 245.57v22.28l-43-23.44V221.1l43 24.47Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.35 273.46v21.6l-35-19.07v-22.45l35 19.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1318.35 288.9v22.28l-43-21.38v-23.31l43 22.41Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.35 314.41v21.61l-35-17.4v-22.44l35 18.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1275.35 312.88 43 20.34v22.28l-43-19.31v-23.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.35 356.37v21.6l-35-15.72v-22.44l35 16.56Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1275.35 361.27 43 18.28v22.28l-43-17.25v-23.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1368.35 400.32v21.61l-35-14.04v-22.45l35 14.88Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1275.35 405.61 43 16.23v9.87l-23.66 4.04-19.34-6.83v-23.31Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1337.15 428.72-3.8.65v-2.08l3.8 1.43Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1162.35 68.23v22.06l-55 23.38V92.35l55-24.12Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.35 32.67v23.4l-62 26.35V59.86l62-27.19Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1162.35 112.15v22.07l-55 21.9V134.8l55-22.65Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.35 78.76v23.4l-62 24.69v-22.56l62-25.53Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1162.35 156.08v22.07l-55 20.42v-21.32l55-21.17Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.35 124.86v23.39l-62 23.02v-22.56l62-23.85Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1162.35 200v22.06l-55 18.97V219.7l55-19.7Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.35 170.94v23.4l-62 21.37v-22.56l62-22.21Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1162.35 243.93v22.06l-55 17.49v-21.32l55-18.23Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.35 217.04v23.38l-62 19.71v-22.55l62-20.54Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1162.35 287.86v22.06l-55 16.01v-21.32l55-16.75Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.35 263.12v23.4l-62 18.05v-22.56l62-18.89Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1162.35 331.78v22.07l-55 14.53v-21.32l55-15.28Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.35 309.21v23.41l-62 16.38v-22.57l62-17.22Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1162.35 375.71v22.06l-55 13.07v-21.33l55-13.8Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.35 355.3v23.39l-62 14.74v-22.56l62-15.57Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1162.35 419.63v22.07l-55 11.59v-21.32l55-12.34Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1242.35 401.39v23.4l-62 13.06v-22.56l62-13.9Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1084.35 500.67 43-7.89v21.55l-43 7.32v-20.98Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1145.35 489.36 44-8.08v22.57l-44 7.49v-21.98Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1208.35 477.78 53-9.73v23.31l-53 9.01v-22.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1084.35 543.12 43-6.73v21.58l-43 6.14v-20.99Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1145.35 533.47 44-6.88v22.58l-44 6.29v-21.99Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1208.35 523.63 53-8.29v23.32l-53 7.57v-22.6Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1084.35 585.58 43-5.55v21.57l-43 4.98v-21Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1145.35 577.59 44-5.68v22.58l-44 5.09v-21.99Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1208.35 569.49 53-6.86v23.32l-53 6.13v-22.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1331.35 553.5v24.6l-48 5.56v-23.95l48-6.21Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1354.35 550.61 51-6.59v25.45l-51 5.91v-24.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1441.35 539.9v24.82l-11 1.28v-24.68l11-1.42Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1084.35 628.05 43-4.39v21.57l-43 3.8v-20.98Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1145.35 621.72 44-4.48v22.57l-44 3.89v-21.98Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1208.35 615.35 53-5.41v23.29l-53 4.7v-22.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1283.35 607.58 48-4.89v24.58l-48 4.25v-23.94Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1354.35 600.41 51-5.21v25.46l-51 4.52v-24.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1441.35 592.07v24.83l-11 .98v-24.69l11-1.12Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1084.35 670.5 43-3.22v21.57l-43 2.64V670.5Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1145.35 665.84 44-3.29v22.57l-44 2.71v-21.99Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1208.35 661.19 53-3.97v23.31l-53 3.25v-22.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1283.35 655.46 48-3.6v24.59l-48 2.96v-23.95Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1354.35 650.21 51-3.81v25.46l-51 3.12v-24.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1441.35 644.24v24.83l-11 .67v-24.67l11-.83Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1084.35 712.96 43-2.05v21.57l-43 1.47v-20.99Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1145.35 709.97 44-2.1v22.57l-44 1.51v-21.98Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1208.35 707.05 53-2.52v23.3l-53 1.81v-22.59Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1283.35 703.33 48-2.28v24.59l-48 1.64v-23.95Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1354.35 700.02 51-2.43v25.46l-51 1.74v-24.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1441.35 696.42v24.82l-11 .38v-24.68l11-.52Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1084.35 755.07 43-.89v21.67l-43 .3v-21.08Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1145.35 754.25 44-.9v22.5l-44 .31v-21.91Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1208.35 752.46 53-1.09v23.48l-53 .37v-22.76Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1283.35 751.41 48-.98v24.42l-48 .33v-23.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1354.35 749.48 51-1.04v25.41l-51 .35v-24.72Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1441.35 747.95v25.9l-11 .08v-25.74l11-.24Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1084.35 800.85 43 .37v21.68l-43-.96v-21.09Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1145.35 801.85 44 .38v22.51l-44-.97v-21.92Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1208.35 801.85 53 .46v23.5l-53-1.19v-22.77Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1283.35 802.85 48 .42v24.42l-48-1.05v-23.79Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1354.35 802.85 51 .44v25.43l-51-1.13v-24.74Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1441.35 803.95v25.92l-11-.25v-25.77l11 .1Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1283.35 463.72 48-8.82v25.49l-48 8.14v-24.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1354.35 450.67 51-9.37v26.53l-51 8.65v-25.81Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1441.35 434.68v27.04l-11 1.87V436.7l11-2.02Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1283.35 512.72 48-7.49v25.25l-48 6.82v-24.58Z"
        className="light"
      />
      <path
        fill="#fff"
        d="m1354.35 501.65 51-7.96v26.29l-51 7.24v-25.57Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M1442.35 487.92v26.8l-12 1.7v-26.63l12-1.87Z"
        className="light"
      />
      <path
        fill="#fff"
        d="M740.35 469.56v12.47l-21-4.2v-12.64l21 4.37Z"
        className="light"
      />
    </g>
  )

  const [lightPosArray, setLightPosArray] = useState([])

  const [mousePos, setMousePos] = useState({ x: 1, y: 1 })

  function handleMouseMove(event) {
    setMousePos({ x: event.clientX, y: event.clientY })
    setLights((object) => {
      let lightIndex = 0
      const newLights = (
        <g className="lights">
          {object.props.children.map((light) => {
            const distance = Math.sqrt(
              Math.pow(Math.abs(lightPosArray[lightIndex].x - mousePos.x), 2) +
                Math.pow(Math.abs(lightPosArray[lightIndex].y - mousePos.y), 2)
            )
            const newLight = (
              <path
                className="light"
                d={light.props.d}
                fill={distance <= sensorRadius ? 'white' : 'black'}
              />
            )
            ++lightIndex
            return newLight
          })}
        </g>
      )
      return newLights
    })
  }

  useEffect(() => {
    function handleResize() {
      //console.log("Resized Run");
      setLightPosArray(() => {
        return Array.from(document.getElementsByClassName('light')).map(
          (light) => {
            //console.log(light);
            const lightPosClient = light.getClientRects()
            // console.log({
            //   x: lightPosClient[0].x + lightPosClient[0].width / 2,
            //   y: lightPosClient[0].y + lightPosClient[0].height / 2,
            // });
            return {
              x: lightPosClient[0].x + lightPosClient[0].width / 2,
              y: lightPosClient[0].y + lightPosClient[0].height / 2,
            }
          }
        )
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 1440 820"
      preserveAspectRatio="none"
      className="background"
      onMouseMove={(event) => handleMouseMove(event)}
    >
      {/* <circle className="moon" cx="162" cy="1" r="400" fill="#fff" /> */}

      <path
        className="buildings"
        fill="#000"
        d="m1441.5 834.22-178-.48-174-.47-101.71-.28-40-.1-23-.07-11.29-.03-28.71-.07-9.29-.03-7.5-.02-20-.05-33-.09-16.5-.05h-1l-14.07-.04-36.43-.1-17-.04-29-.08-14-.04-28-.07-14-.04-24-.07-14-.03-23-.07-7.5-.02-85.5-.23-18-.05-9-.02-18-.05-8-.02-18-.05-9-.02-16-.05-7-.02-15.52-.04-5.96-.01-15.52-.05-6-.01-16-.05-5-.01-14-.04-5-.01-15-.04-5-.01-5.97-.02h-.02L-2 830.32V514l67.5-36.71 33 4.56v-61.92l95-61.71 73 15.3v127.99l244-97.83 97 21.87v-40.33l137-50.75 78 23.01V208.22l85-38.71 56 24.69v225.5l40-11.48 86 25.87V78.86L1263.5 0l17.69 13.89.98.77 92.33 72.47v335.46l46.24-8.13 20.26-3.56.09 77.16.03 26.78.03 24.53v.01l.03 25.9.03 26.26.03 25.9.03 26.27.04 25.9.03 26.27.03 25.9.03 26.27.03 25.9.03 30 .03 25.92.01 4.35Z"
        className="walls"
      />
      {lights}
    </svg>
  )
}

export default Background
