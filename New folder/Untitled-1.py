def hitung_gaji():
    jam_kerja = float(input("Masukkan jumlah jam kerja: "))
    tarif_per_jam = float(input("Masukkan tarif per jam: "))
    
    if jam_kerja > 40:
        jam_lembur = jam_kerja - 40
        gaji_normal = 40 * tarif_per_jam
        gaji_lembur = jam_lembur * tarif_per_jam * 1.5
        total_gaji = gaji_normal + gaji_lembur
    else:
        total_gaji = jam_kerja * tarif_per_jam

    print(f"Gaji karyawan adalah: Rp {total_gaji:,.2f}")

hitung_gaji()
