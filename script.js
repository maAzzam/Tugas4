// Mendefinisikan kelas Walker
class Walker {
    constructor(x, y) {
      this.x = x; // Koordinat x
      this.y = y; // Koordinat y
      this.speed = 2; // Kecepatan walker
      this.acceleration = 0.1; // Percepatan walker
      this.targetX = mouseX; // Koordinat target x (kursor mouse)
      this.targetY = mouseY; // Koordinat target y (kursor mouse)
    }
  
    // Metode untuk menampilkan walker
    display() {
      // Tambahkan kode untuk menampilkan walker (misalnya, sebuah lingkaran atau karakter tertentu)
      // Di sini kita hanya menggunakan lingkaran sebagai contoh
      fill(255, 0, 0);
      circle(this.x, this.y, 20); // Ukuran lingkaran adalah 20 piksel
    }
  
    // Metode untuk mengupdate posisi walker
    updatePosition() {
      // Menghitung vektor arah ke target (karakter)
      let dx = this.targetX - this.x;
      let dy = this.targetY - this.y;
  
      // Menghitung jarak antara walker dan target
      let distance = Math.sqrt(dx * dx + dy * dy);
  
      // Normalisasi vektor arah
      dx /= distance;
      dy /= distance;
  
      // Mengupdate posisi walker berdasarkan kecepatan dan arah
      this.x += dx * this.speed;
      this.y += dy * this.speed;
    }
  
    // Metode untuk memeriksa batas canvas
    checkCanvasBounds() {
      // Jika walker keluar dari layar, kita akan menghapusnya dari array walkers
      if (this.x < -20 || this.y < -20 || this.x > width + 20 || this.y > height + 20) {
        return true; // Mengembalikan true jika walker keluar dari layar
      } else {
        return false; // Mengembalikan false jika walker masih berada di layar
      }
    }
  }
  
  // Array untuk menyimpan walker
  let walkers = [];
  
  let counter = 0; // Counter untuk mengatur penambahan walker
  
  function setup() {
    createCanvas(800, 600); // Membuat canvas dengan ukuran 800x600 piksel
  }
  
  function draw() {
    background(0, 0, 100); // Warna biru gelap untuk latar belakang
  
    // Menambahkan walker baru setiap 120 frame
    if (counter % 120 === 0) {
      walkers.push(new Walker(random(width), random(height))); // Tambahkan walker dengan posisi acak
    }
  
    // Memperbarui dan menampilkan setiap walker
    for (let walker of walkers) {
      walker.targetX = mouseX; // Mengatur target x walker menjadi posisi kursor mouse
      walker.targetY = mouseY; // Mengatur target y walker menjadi posisi kursor mouse
      walker.updatePosition(); // Memperbarui posisi walker
      walker.display(); // Menampilkan walker
      walker.checkCanvasBounds(); // Memeriksa batas canvas untuk walker (jika diperlukan)
    }
  
    // Menampilkan kursor mouse sebagai karakter khusus
    fill(0, 128, 0); // Warna hijau tua untuk karakter khusus
    circle(mouseX, mouseY, 15); // Ukuran karakter khusus adalah 15 piksel
  
    counter++; // Menginkremen counter setiap frame
  }
  
  