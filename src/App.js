
import React, { useState, useEffect } from 'react'
import Intro from './components/intro.js';
import Profile from './components/profile.js';

function App() {
  // var kiri getter (variabel get nya), kanan setter (function untuk mengubah data nya), apapun perubahan yang terjadi di setter akan masuk ke variabel get nya.
  // state = data sementara (bisa berubah data nya, tapi kalo di refresh dia balik lagi ke standar sesuai yang kita declare)
  // 1 -> masuk sebagai nilai int default di variabel getter.
  // prev -> callback, tugas nya untuk melihat data terakhir yang ada di setPacarSaya
  const [pacarSaya, setPacarSaya] = useState(0) 
  const [namaPacar, setNamaPacar] = useState("")

  // useEffect -> apapun perubahan data atau aksi yang terjadi didalam App, maka akan trigger useEffect untuk berubah
  useEffect(() => { 
    if (pacarSaya === 1){
      setNamaPacar("Jasmine")
    } 
    else {
      setNamaPacar("Jasmine & Keisya")
    }
  }, [pacarSaya])

  // useEffect buat cek kalo semisal jumlah pacar kau ada dibawah 0
  useEffect(() => {
    if(pacarSaya < 1) {
      setNamaPacar("Jangan jomblo mas :)")
    }
  }, [pacarSaya])

  return (
    <>
    <h1>pacar saya berjumlah: {pacarSaya} </h1>
    <button onClick={() => setPacarSaya((previous) => previous + 1)}>tambah pacar</button> 
    <button onClick={() => setPacarSaya((previous) => previous - 1)}>kurangi pacar</button> 

    <h2>nama pacar saya adalah: {namaPacar}</h2>

    {/* <Intro />
    <Profile profileName="mas yosi" /> */}
    </>
  );
}

export default App;
