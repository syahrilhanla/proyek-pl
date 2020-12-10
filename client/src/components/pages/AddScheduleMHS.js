import React, { useContext, useState, useEffect, useRef } from 'react';
import { GlobalContext } from '../globalState/GlobalState';
import { Navbar } from '../Navbar';

export const AddScheduleMHS = () => {

    const { addNewBorrowing } = useContext(GlobalContext);

    //CHECK EMPTY FIELDS NOT DONE YET
    const isEmpty = (fields) => {
        fields.forEach(field => {
            if (field === '') {
                console.log('ada field yang kosong');
                return true;
            } else {
                console.log({ field });
            }
        })
    }

    // STATE
    const [name, setName] = useState('');
    const [nim, setNim] = useState('');
    const [usage, setUsage] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [room, setRoom] = useState('');
    const [startDate, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [finishTime, setFinishTime] = useState('');
    const [status, setStatus] = useState(1);

    // REFS
    const refName = useRef('');

    // Make focus to input name
    useEffect(() => {
        refName.current.focus();
    },[])

    // info Logger 
    const log = (information) => {
        console.log(information)
    }

    // Turns date into formatted data
    const dateFormatter = (date, month, year) => {
        const months = [
            'Januari', 'Februari', 'Maret', 'April',
            'Mei', 'Juni', 'Juli', 'Agustus', 'September',
            'Oktober', 'November', 'Desember'
        ];
        const formattedMonth = months.filter((element, index) => index === month - 1);
        
        return `${date} ${formattedMonth} ${year}`;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // GET FORMATTED DATA
        const time = `${startTime}-${finishTime}`;
        const year = startDate.slice(0, 4);
        const month = startDate.slice(5, 7);
        const date = startDate.slice(9, 11);

        // Creates new Object to push to database every time submit hit
        const newData = {
            name: name, nim: nim, room: room,
            usage: usage, phoneNum: phoneNum,
            startDate: dateFormatter(date, month, year),
            time: time,
            status: status,
            notificationCount: 1
        }

        log(newData);
        addNewBorrowing(newData);
        // isEmpty(newData);
    }


    // ROOMS GENERATOR
    const rooms = [];
    const roomGen = () => {
        for (let i = 1; i <= 38; i++) {
            let room = `Ruang ${i}`;
            rooms.push(room);
        }
    }
    roomGen();
    // ###############################

    const required = () => <span style={{color: 'red'}}>*</span>;

    return (
        <>
            <Navbar user={'mhs'}/>
            <div className="container">
                <h1>Peminjaman Baru</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name"><h3>{required()} Atas Nama (Prodi/Organisasi)</h3></label>
                        <input
                            ref={refName}
                            type="text"
                            placeholder="Masukkan Nama Organisasi/Program Studi"
                            value={name}
                            className="input-normal"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="nim"><h3>NIM (Isi Apabila Mahasiswa)</h3></label>
                        <input
                            type="text"
                            placeholder="Masukkan NIM Apabila Mahasiswa"
                            value={nim}
                            className="input-normal"
                            onChange={(e) => setNim(e.target.value)}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="noTelp"><h3>{required()} Nomor Telepon/WA</h3></label>
                        <input
                            type="text"
                            placeholder="Masukkan Nomor Telepon/WA..."
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                            className="input-normal"
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="room"><h3>{required()} Ruangan</h3></label>
                        <input
                            list="room"
                            type="text"
                            placeholder="Masukkan Ruangan..."
                            name="room"
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                            className="input-normal"
                        />
                        <datalist id="room" >
                            {rooms.map(room => (
                                <option value={room} key={room} />
                            ))}

                        </datalist>
                    </div>

                    <div className="form-control">
                        <label htmlFor="keperluan"><h3>{required()} Keperluan</h3></label>
                        <input
                            type="text"
                            placeholder="Masukkan Keperluan..."
                            value={usage}
                            onChange={(e) => setUsage(e.target.value)}
                            className="input-normal"
                        />
                    </div>

                    <div className="form-control">
                        <label><h3>{required()} Tanggal Peminjaman</h3></label><br />
                        <input
                            type="date"
                            value={startDate}
                            placeholder="dd-mm-yyyy"
                            onChange={(e) => setDate(e.target.value)}
                            className="input-normal"
                        />
                    </div>
                    <div className="form-control ">
                    <label><h3>{required()} Waktu Peminjaman</h3></label><br />
                        <div className="time">
                            
                            <label htmlFor="starts" ><h4>Mulai</h4></label>
                            <input
                                type="time"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                className="input-half"
                            />

                            <label htmlFor="finishes"><h4>Sampai</h4></label>
                            <input
                                type="time"
                                value={finishTime}
                                onChange={(e) => setFinishTime(e.target.value)}
                                className="input-half"
                            />
                        </div>
                    </div>

                    <input type="submit" value="Ajukan Peminjaman" className="btn btn-primary" id='submit-btn' />

                </form>
            </div></>


    )
}

