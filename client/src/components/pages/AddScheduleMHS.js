import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../globalState/GlobalState';
import { Navbar } from '../Navbar';

export const AddScheduleMHS = () => {

    const { borrowingList, loginInfo, addNewBorrowing } = useContext(GlobalContext);

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
    const [name, setName] = useState(loginInfo.name);
    const [nim, setNim] = useState(loginInfo.nim);
    const [usage, setUsage] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [room, setRoom] = useState('');
    const [startDate, setDate] = useState({});
    const [startTime, setStartTime] = useState('');
    const [finishTime, setFinishTime] = useState('');
    const [status, setStatus] = useState('new-borrowing')

    // info Logger 
    const log = (information) => {
        console.log(information)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const time = `${startTime}-${finishTime}`;
        // Creates new Object to push to database every time submit hit
        const newData = {
            name: name, nim: nim, room: room,
            usage: usage, phoneNum: phoneNum,
            startDate: startDate,
            time: time,
            status: status
        }

        log(newData);
        addNewBorrowing(newData);
        // isEmpty(newData);
    }

    useEffect(() => {
        log(borrowingList);
    }, [borrowingList]);

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

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Peminjaman Baru</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name"><h3>Nama</h3></label>
                        <input
                            type="text"
                            placeholder={loginInfo.name}
                            value={loginInfo.name}
                            className="input-normal"
                            disabled
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="nim"><h3>NIM</h3></label>
                        <input
                            type="text"
                            placeholder={loginInfo.nim}
                            value={loginInfo.nim}
                            className="input-normal"
                            disabled
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="noTelp"><h3>Nomor Telepon/WA</h3></label>
                        <input
                            type="text"
                            placeholder="Masukkan Nomor Telepon/WA..."
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)}
                            className="input-normal"
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="room"><h3>Ruangan</h3></label>
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
                        <label htmlFor="keperluan"><h3>Keperluan</h3></label>
                        <input
                            type="text"
                            placeholder="Masukkan Keperluan..."
                            value={usage}
                            onChange={(e) => setUsage(e.target.value)}
                            className="input-normal"
                        />
                    </div>

                    <div className="form-control">
                        <label><h3>Tanggal Peminjaman</h3></label><br />
                        <label htmlFor="starts"><h4>Mulai</h4></label>
                        <input
                            type="date"
                            value={startDate}
                            placeholder="dd-mm-yyyy"
                            onChange={(e) => setDate(e.target.value)}
                            className="input-normal"
                        />
                    </div>
                    <div className="form-control">
                        <label><h3>Waktu Peminjaman</h3></label><br />
                        <label htmlFor="starts" style={{ marginLeft: '6px' }}><h4>Mulai</h4></label>
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

                    <input type="submit" value="Ajukan Peminjaman" className="btn btn-primary" id='submit-btn' />

                </form>
            </div></>


    )
}

