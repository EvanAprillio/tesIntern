UPDATE Mahasiswa
SET Alamat = 'Jl. Raya No.5'
WHERE NIM = '123456';

SELECT 
    m.NIM, 
    m.Nama, 
    m.Jurusan, 
    mk.Dosen_Pengajar
FROM mahasiswa m
JOIN mata_kuliah mk ON m.NIM = mk.NIM
WHERE m.Jurusan = 'Teknik Informatika';

SELECT Nama, Umur
FROM mahasiswa
ORDER BY Umur DESC
LIMIT 5;

SELECT 
    m.Nama, 
    mk.Mata_Kuliah, 
    mk.Nilai
FROM mahasiswa m
JOIN mata_kuliah mk ON m.NIM = mk.NIM
WHERE mk.Nilai > 70;

SELECT * FROM Mahasiswa;