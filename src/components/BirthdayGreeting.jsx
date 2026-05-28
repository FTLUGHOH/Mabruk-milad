import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function BirthdayGreeting() {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const audio = new Audio("https://raw.githubusercontent.com/FTLUGHOH/Mabruk-milad/main/public/birthday-song.mp3")
    audio.autoplay = true
    audio.loop = true
    audio.volume = 0.5
    audio.play().catch(error => console.log("Autoplay prevented:", error))

    return () => {
      audio.pause()
      audio.currentTime = 0
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 flex items-center justify-center p-6 overflow-hidden text-white relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">✨</div>
        <div className="absolute top-24 right-16 text-3xl animate-pulse">🎈</div>
        <div className="absolute bottom-16 left-20 text-4xl animate-pulse">🎂</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-bounce">🤍</div>
      </div>

      {!opened ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <img
              src="https://raw.githubusercontent.com/FTLUGHOH/Mabruk-milad/main/public/dion-rizqie.jpg"
              alt="Dion Rizqie"
              className="w-32 h-32 rounded-full border-4 border-white/20 shadow-lg object-cover"
            />
          </motion.div>

          <h1 className="text-4xl font-bold mb-2 leading-tight">
            Dion Rizqie 🎁
          </h1>

          <p className="text-zinc-300 leading-8 mb-8">
            Ada sesuatu buat kamu ✨
          </p>

          <p className="text-zinc-300 leading-8 mb-8">
            Klik tombol di bawah ini ✨
          </p>

          <button
            onClick={() => setOpened(true)}
            className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300"
          >
            Open Message 🤍
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <img
              src="https://raw.githubusercontent.com/FTLUGHOH/Mabruk-milad/main/public/dion-rizqie.jpg"
              alt="Dion Rizqie"
              className="w-40 h-40 rounded-full border-4 border-white/20 shadow-lg object-cover"
            />
          </motion.div>

          <p className="text-zinc-300 text-sm tracking-[0.3em] mb-4">
            HAPPY 17TH BIRTHDAY
          </p>

          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-2 leading-tight"
          >
            Dion Rizqie 🎉
          </motion.h1>

          <motion.h2
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
          >
            عيد ميلاد سعيد 🤍
          </motion.h2>

          <div className="space-y-4 text-lg leading-9 text-zinc-100">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              بارك الله في عمرك،
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              وأسعد الله قلبك،
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              وحقّق الله أحلامك،
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              وجعل أيّامك كلّها فرحًا وراحةً.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-zinc-300 leading-8 text-base"
          >
            <p>
              Semoga selalu dikelilingi hal-hal baik,
            </p>

            <p>
              dan semoga semua yang disemogakan
            </p>

            <p>
              pelan-pelan jadi kenyataan ✨
            </p>
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-3 text-3xl animate-pulse">
            <span>🎂</span>
            <span>✨</span>
            <span>🤍</span>
            <span>🎉</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
