import React, {useState} from 'react'

const Gakutowatch = () => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
  const [lapTimes, setLapTimes] = useState<number[]>([]);
  const [lap, plusCount] = useState<number>(0)

    // startを押したときの処理
  const watchStart = () => {
    if (timerId) return
    // 10ミリ秒ごとにtimeの変数を上書き
    const id: NodeJS.Timeout = setInterval(() => setTime((prevTime) => prevTime + 10), 10)
    setTimerId(id)
  }

  // stopを押したときの処理
  const watchStop = () => {
    // 一定間隔ごとに実行する処理を解除
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  const watchReset = () => {
    setTime(0)
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

    // stopで確定したタイムを記録, 0の場合には記録しない
  const saveLapTime = () => {
    const number = 0
    if (time) {
      setLapTimes([...lapTimes, time])
  }
}

  return (
    <div className='timer'>
      <h2>ポモドーロタイマー</h2>
      <div>{(time / 1000).toFixed(1)} s</div>
      <div>
        <button onClick={watchStart}>Start</button>
      </div>
      <div>
        <button onClick={watchStop}>Stop</button>
      </div>
      <div>
        <button onClick={watchReset}>Reset</button>
      </div>
      <div>
        <button onClick={saveLapTime}>Record</button>
      </div>
      <div>
      <h3>ラップタイム</h3>
      <ul>
        {lapTimes.map((lapTime, index) => (
      <li key={index}>{(lapTime / 1000).toFixed(2)} s</li>
      ))}
      </ul>
      <body>
    <div className="container">
        <h1>ポモドーロタイマーとは何ですか？</h1>

        <p>ポモドーロタイマーは、作業や学習を一定の時間（通常は25分）集中して行い、その後短い休憩（通常は5分）を取るという作業効率化テクニックです。この手法は、1980年代にイタリアのフランチェスコ・チリロによって提唱されました。ポモドーロ（イタリア語でトマト）という名前は、チリロが使っていたキッチンタイマーがトマト型だったことに由来しています。</p>

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
</body>
</div>

    </div>
  )
}

export default Gakutowatch