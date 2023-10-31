import React, {useState, useEffect} from 'react'

const Gakutowatch = () => {
  const [time1, setTime1] = useState<number>(1500000)
  const [time4, setTime4] = useState<number>(300000)
  const [count, changecount] = useState(0)
  const [qkcount, qkchangecount] = useState(0)
  const [timerId1, setTimerId1] = useState<NodeJS.Timeout | null>(null)
  const [timerId4, setTimerId4] = useState<NodeJS.Timeout | null>(null)
  const [lapTimes, setLapTimes] = useState<number[]>([]);
  const [lap, plusCount] = useState<number>(0)
  const [errorMessage, setErrorMessage] = useState<string>('');

    // startを押したときの処理
  const watchStart1 = () => {
    if (timerId1) return
    // 10ミリ秒ごとにtimeの変数を上書き
    const id: NodeJS.Timeout = setInterval(() => setTime1((prevTime) => prevTime - 10), 10);
  }
  // stopを押したときの処理
  const watchStop1 = () => {
    // 一定間隔ごとに実行する処理を解除
    if (timerId1) clearInterval(timerId1)
    setTimerId1(null)
  }

  const watchReset1 = () => {
    setTime1(1500000)
    if (timerId1) clearInterval(timerId1)
    setTimerId1(null)
  }

  const formatTime = (time1: number) => {
    const minutes = Math.floor(time1 / 60000); // ミリ秒を分に変換
    const seconds = Math.floor((time1 % 60000) / 1000); // ミリ秒を秒に変換
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return time1;
  };

  const formatTime4 = (time2: number) => {
    const minutes = Math.floor(time4 / 60000); // ミリ秒を分に変換
    const seconds = Math.floor((time4 % 60000) / 1000); // ミリ秒を秒に変換
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // タイマーをこなした回数を増減
  const countTimerPlus = () => {
    changecount(count + 1)
  }

  const countTimerMinus = () => {
    if (count > 0)
    changecount(count - 1)
  }

  const qkcountTimerPlus = () => {
    qkchangecount(qkcount + 1)
  }

  const qkcountTimerMinus = () => {
    if (qkcount > 0)
    qkchangecount(qkcount - 1)
  }

  //count, qkcountをリセット
  const countReset = () => {
    if (count > 0)
    changecount(count - count)
  }
  const qkcountReset = () => {
    if (count > 0)
    qkchangecount(count - count)
  }

    // QKタイマー(timerId4)
    // startを押したときの処理
    const watchStart4 = () => {
      if (timerId4) return
      // 10ミリ秒ごとにtimeの変数を上書き
      const id: NodeJS.Timeout = setInterval(() => setTime4((prevTime) => prevTime - 10), 10)
      setTimerId4(id)
    }

    // stopを押したときの処理
    const watchStop4 = () => {
      // 一定間隔ごとに実行する処理を解除
      if (timerId4) clearInterval(timerId4)
      setTimerId4(null)
    }

    const watchReset4 = () => {
      setTime4(300000)
      if (timerId4) clearInterval(timerId4)
      setTimerId4(null)
    }

{/*
  useEffect(() => {
    if (time1 === 0) {
      setErrorMessage('エラー: タイマーが0秒に達しました!');
      clearInterval(timerId!);
      setTimerId(null);
    } else {
      setErrorMessage('');
    }
  }, [time1, timerId]);

  const watchReset = () => {
    setTime1(1500)
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

    // stopで確定したタイムを記録, 0の場合には記録しない
  const saveLapTime = () => {
    const number = 0
    if (time1) {
      setLapTimes([...lapTimes, time1])
  }
}
*/}


return (
  <div className='timer'>
    <div className="timer-container">
      <h2>ポモドーロタイマー</h2>
      <div className='three-timers'>
        {/*<div className="timer-display1">{(time1 / 1000).toFixed(2)} s</div>*/}
        <div className="timer-display1">{formatTime(time1)}</div>

        <button className="timer-button" onClick={watchStart1}>Start</button>
        <button className="timer-button" onClick={watchStop1}>Stop</button>
        <button className="timer-button" onClick={watchReset1}>Reset</button>
        <div className="countchange">
         <button className="countminus" onClick={countTimerMinus}>＜</button>
         {count}
         <button className="countplus" onClick={countTimerPlus}>＞</button>
        </div>
        <div>ポモドーロ</div>
        <div>※タイマー1回 + 1休憩 = 1ポモドーロ※</div>
        <button className='reset' onClick={countReset}>Reset</button>
      </div>
      <h2>休憩タイマー</h2>
      {/*<div className="qk-timer-display">{(time4 / 1000).toFixed(2)} s</div>*/}
      <div className="qk-timer-display">{formatTime(time4)}</div>
      <button className="timer-button" onClick={watchStart4}>Start</button>
      <button className="timer-button" onClick={watchStop4}>Stop</button>
      <button className="timer-button" onClick={watchReset4}>Reset</button>
      <div className="countchange">
         <button className="countminus" onClick={qkcountTimerMinus}>＜</button>
         {qkcount}
         <button className="countplus" onClick={qkcountTimerPlus}>＞</button>
        </div>
      <div>休憩</div>
      <button className='reset' onClick={qkcountReset}>Reset</button>
    </div>

    <div className="info-container">
      <h1>ポモドーロタイマーとは何ですか？</h1>
      <p>
        ポモドーロタイマーは、作業や学習を一定の時間（通常は25分）集中して行い、その後短い休憩（通常は5分）を取るという作業効率化テクニックです。この手法は、1980年代にイタリアのフランチェスコ・チリロによって提唱されました。ポモドーロ（イタリア語でトマト）という名前は、チリロが使っていたキッチンタイマーがトマト型だったことに由来しています。
      </p>

      <h2>ポモドーロテクニックの基本的な手順</h2>
      <ol>
        <li><strong>作業を25分間集中して行う（ポモドーロ）</strong> タスクに取り組む時間を25分に設定します。この間、他のことに気を取られずに集中して取り組みます。</li>
        <li><strong>5分間の休憩を取る</strong> 25分の作業後に、5分間の休憩を取ります。リラックスしたり、ストレッチをしたりしてリフレッシュします。</li>
        <li><strong>4ポモドーロごとに長めの休憩を取る</strong> 4セットのポモドーロ（つまり4回の25分の作業とその後の休憩）を終えた後に、長めの休憩（通常は15-30分）を取ります。これにより、疲労を軽減し、長期的な集中力を保つことができます。</li>
      </ol>

      <h2>ポモドーロタイマーの利点</h2>
      <ul>
        <li><strong>集中力の向上：</strong> 短い時間で集中して作業することで、効率的にタスクに取り組むことができます。</li>
        <li><strong>疲労の軽減：</strong> 定期的な休憩を取ることで、疲労やストレスを軽減し、長時間の作業に耐えられるようになります。</li>
        <li><strong>タスクの分割：</strong> 大きなタスクを25分のセッションに分割することで、複雑な仕事も取り組みやすくなります。</li>
        <li><strong>作業の計画と進捗の可視化：</strong> ポモドーロを使うことで、作業の進捗を確認しやすくなり、日々の計画を立てやすくなります。</li>
        <li><strong>モチベーションの維持：</strong> 25分の作業という短い時間なので、モチベーションを持続しやすいです。</li>
      </ul>
    </div>
  </div>
)

}

export default Gakutowatch