import React, {useState, useEffect} from 'react'

const Gakutowatch = () => {
  const [time1, setTime1] = useState<number>(1500000)
  const [time2, setTime2] = useState<number>(1500000)
  const [time3, setTime3] = useState<number>(1500000)
  const [time4, setTime4] = useState<number>(1500000)
  const [timerId1, setTimerId1] = useState<NodeJS.Timeout | null>(null)
  const [timerId2, setTimerId2] = useState<NodeJS.Timeout | null>(null)
  const [timerId3, setTimerId3] = useState<NodeJS.Timeout | null>(null)
  const [timerId4, setTimerId4] = useState<NodeJS.Timeout | null>(null)
  const [lapTimes, setLapTimes] = useState<number[]>([]);
  const [lap, plusCount] = useState<number>(0)
  const [errorMessage, setErrorMessage] = useState<string>('');

    // startを押したときの処理
  const watchStart1 = () => {
    if (timerId1) return
    // 10ミリ秒ごとにtimeの変数を上書き
    const id: NodeJS.Timeout = setInterval(() => setTime1((prevTime) => prevTime - 10), 10)
    setTimerId1(id)
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

      // startを押したときの処理
  const watchStart2 = () => {
    if (timerId2) return
    // 10ミリ秒ごとにtimeの変数を上書き
    const id: NodeJS.Timeout = setInterval(() => setTime2((prevTime) => prevTime - 10), 10)
    setTimerId2(id)
  }

  // stopを押したときの処理
  const watchStop2 = () => {
    // 一定間隔ごとに実行する処理を解除
    if (timerId2) clearInterval(timerId2)
    setTimerId2(null)
  }

  const watchReset2 = () => {
    setTime2(1500000)
    if (timerId2) clearInterval(timerId2)
    setTimerId2(null)
  }

    // startを押したときの処理
    const watchStart3 = () => {
      if (timerId3) return
      // 10ミリ秒ごとにtimeの変数を上書き
      const id: NodeJS.Timeout = setInterval(() => setTime3((prevTime) => prevTime - 10), 10)
      setTimerId3(id)
    }

    // stopを押したときの処理
    const watchStop3 = () => {
      // 一定間隔ごとに実行する処理を解除
      if (timerId3) clearInterval(timerId3)
      setTimerId3(null)
    }

    const watchReset3 = () => {
      setTime3(1500000)
      if (timerId3) clearInterval(timerId3)
      setTimerId3(null)
    }

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
      setTime4(1500000)
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
      <div className="timer-display">{(time1 / 1000).toFixed(2)} s</div>
      <button className="timer-button" onClick={watchStart1}>Start</button>
      <button className="timer-button" onClick={watchStop1}>Stop</button>
      <button className="timer-button" onClick={watchReset1}>Reset</button>
      <div className="timer-display">{(time2 / 1000).toFixed(2)} s</div>
      <button className="timer-button" onClick={watchStart2}>Start</button>
      <button className="timer-button" onClick={watchStop2}>Stop</button>
      <button className="timer-button" onClick={watchReset2}>Reset</button>
      <div className="timer-display">{(time3 / 1000).toFixed(2)} s</div>
      <button className="timer-button" onClick={watchStart3}>Start</button>
      <button className="timer-button" onClick={watchStop3}>Stop</button>
      <button className="timer-button" onClick={watchReset3}>Reset</button>
      <div className="timer-display">{(time4 / 1000).toFixed(2)} s</div>
      <button className="timer-button" onClick={watchStart4}>Start</button>
      <button className="timer-button" onClick={watchStop4}>Stop</button>
      <button className="timer-button" onClick={watchReset4}>Reset</button>
      <div className="button-container">
      {/*  <button className="timer-button" onClick={watchReset}>Reset</button>
        <button className="timer-button" onClick={saveLapTime}>Record</button>*/}
      </div>
    </div>
{/*
    <div className="lap-times-container">
      <h3>ラップタイム</h3>
      <ul>
        {lapTimes.map((lapTime, index) => (
          <li key={index}>{(lapTime / 1000).toFixed(2)} s</li>
        ))}
      </ul>
    </div>
        */}
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