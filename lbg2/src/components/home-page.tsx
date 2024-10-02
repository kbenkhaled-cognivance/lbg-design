"use client"

import React, { useState, useCallback ,useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MessageSquare, User, BarChart2, BookOpen, Award, Briefcase, Wrench, Code, PenTool, Camera, ChevronLeft, ChevronRight, Play, Pause, Brain, Plus, Edit2, X, Eye, Download, Scissors, Coffee, Smartphone, Headphones } from "lucide-react"
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function HomePage() {
  const clientName = "[nom_entreprise_cible]"
  const userName = "John Doe"
  const metricsData = {
    personnesFormees: 1234,
    engagementExperts: 8.5,
    moyenneEvaluations: 9.2,
    engagementApprenants: 8.7
  }

  const chartData = [
    { name: 'Jan', Tâches: 65 },
    { name: 'Fév', Tâches: 59 },
    { name: 'Mar', Tâches: 80 },
    { name: 'Avr', Tâches: 81 },
    { name: 'Mai', Tâches: 56 },
    { name: 'Juin', Tâches: 55 },
  ]

  const lineChartData = [
    { name: 'Jan', Commentaires: 12 },
    { name: 'Fév', Commentaires: 19 },
    { name: 'Mar', Commentaires: 3 },
    { name: 'Avr', Commentaires: 5 },
    { name: 'Mai', Commentaires: 2 },
    { name: 'Juin', Commentaires: 3 },
  ]

  const [workers] = useState([
    { name: "John Doe", position: "Développeur", experience: 5, startDate: "2018-03-15", phone: "+33123456789", email: "john.doe1@example.com", coursesGenerated: 12 },
    { name: "Jane Doe", position: "Designer", experience: 3, startDate: "2020-07-01", phone: "+33987654321", email: "jane.doe1@example.com", coursesGenerated: 8 },
    { name: "John Doe", position: "Manager", experience: 7, startDate: "2016-11-30", phone: "+33456789012", email: "john.doe2@example.com", coursesGenerated: 15 },
    { name: "Jane Doe", position: "Ingénieur", experience: 4, startDate: "2019-05-20", phone: "+33234567890", email: "jane.doe2@example.com", coursesGenerated: 10 },
    { name: "John Doe", position: "Analyste", experience: 2, startDate: "2021-09-10", phone: "+33345678901", email: "john.doe3@example.com", coursesGenerated: 6 }
  ])

  const [jobs, setJobs] = useState([
    { title: "Manager", icon: Briefcase, courses: ["Gestion d'équipe", "Leadership", "Planification stratégique"] },
    { title: "Ingénieur", icon: Wrench, courses: ["Conception de systèmes", "Résolution de problèmes", "Gestion de projet technique"] },
    { title: "Développeur", icon: Code, courses: ["Programmation avancée", "Développement web", "Sécurité des applications"] },
    { title: "Designer", icon: PenTool, courses: ["Design d'interface utilisateur", "Expérience utilisateur", "Design graphique"] },
    { title: "Photographe", icon: Camera, courses: ["Photographie numérique", "Édition d'images", "Composition photographique"] }
  ])

  const pieChartData = [
    { name: 'Terminé', value: 400 },
    { name: 'En cours', value: 300 },
    { name: 'Non commencé', value: 300 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

  const taskVideoSnippets = [
    { name: "Introduction à la création de cours assistée par IA", duration: "5:30" },
    { name: "Conception de modules d'apprentissage engageants", duration: "7:45" },
    { name: "Utilisation de CoGeo pour un apprentissage personnalisé", duration: "6:15" },
    { name: "Techniques avancées de formation des employés", duration: "8:00" }
  ]

  const latestCourse = {
    title: "Intelligence Artificielle pour Débutants",
    author: "Dr. John Doe",
    date: "2023-06-15",
    pdfUrl: "/path/to/latest-course.pdf"
  }

  const newsItems = [
    "Nouveau cours sur l'IA générative disponible maintenant !",
    "Webinaire sur les meilleures pratiques en formation d'entreprise ce jeudi",
    "Mise à jour de la plateforme : nouvelles fonctionnalités de suivi des progrès",
    "Félicitations à notre employé du mois pour ses excellents résultats de formation"
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedWorker, setSelectedWorker] = useState(null)
  const [selectedJob, setSelectedJob] = useState(null)
  const [showPdfViewer, setShowPdfViewer] = useState(false)
  const [setCurrentNewsIndex] = useState<number>(0); // Explicitly set the type to 'number'
  const [editingJob, setEditingJob] = useState(null)

  const availableIcons = [
    { name: "Briefcase", icon: Briefcase },
    { name: "Wrench", icon: Wrench },
    { name: "Code", icon: Code },
    { name: "PenTool", icon: PenTool },
    { name: "Camera", icon: Camera },
    { name: "Scissors", icon: Scissors },
    { name: "Coffee", icon: Coffee },
    { name: "Smartphone", icon: Smartphone },
    { name: "Headphones", icon: Headphones },
  ]

  const rotateNews = useCallback(() => {
    setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length)
  }, [newsItems.length])

  useEffect(() => {
    const timer = setInterval(rotateNews, 5000)
    return () => clearInterval(timer)
  }, [rotateNews])
  

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % taskVideoSnippets.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + taskVideoSnippets.length) % taskVideoSnippets.length)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const addJob = () => {
    const newJob = { title: "Nouveau poste", icon: Briefcase, courses: [] }
    setJobs([...jobs, newJob])
  }

  const editJob = (job) => {
    setEditingJob({ ...job })
  }

  const saveEditedJob = () => {
    setJobs(jobs.map(job => job.title === editingJob.title ? editingJob : job))
    setEditingJob(null)
  }

  const deleteJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index)
    setJobs(updatedJobs)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="https://placehold.co/40x40/png?text=Logo" alt="Logo du client" className="h-10 w-10 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Le Beau Geste de {clientName}</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Tableau de bord</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Formation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Analyses</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-2/3"
            >
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                  <Image
                    src="https://placehold.co/160x160/png?text=Avatar"
                    alt="Avatar de l'utilisateur"
                    className="h-40 w-40 rounded-full mr-4"
                  />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Bienvenue, {userName}</h2>
                <p className="text-2xl text-gray-600 text-center">Améliorez vos compétences avec notre système d&apos;analyse des tâches et de retour d&apos;experts de pointe.</p>
              </div>
              <div className="mt-4 bg-blue-600 text-white p-4 rounded-lg overflow-hidden">
                <div className="whitespace-nowrap overflow-hidden">
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                  >
                    {newsItems.map((item, index) => (
                      <span key={index} className="inline-block mr-8">{item}</span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/3"
            >
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Extraits vidéo des tâches</h3>
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 mb-4" style={{height: "180px"}}>
                    <Image
                      src={`https://placehold.co/320x180/png?text=Vidéo+de+tâche+${currentVideoIndex + 1}`}
                      alt={`Vidéo de tâche ${currentVideoIndex + 1}`}
                      className="object-cover rounded"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {taskVideoSnippets[currentVideoIndex].name}
                  </h4>
                  <p className="text-gray-600 mb-4">Durée: {taskVideoSnippets[currentVideoIndex].duration}</p>
                  <div className="flex justify-center space-x-4">
                    <button onClick={togglePlay} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300">
                      {isPlaying ? <Pause className="mr-2" /> : <Play className="mr-2" />}
                      {isPlaying ? 'Pause' : 'Lecture'}
                    </button>
                    <button onClick={prevVideo} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors duration-300">
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button onClick={nextVideo} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors duration-300">
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon: BarChart2, label: "Personnes formées", value: metricsData.personnesFormees },
              { icon: MessageSquare, label: "Engagement des experts", value: `${metricsData.engagementExperts}/10` },
              { icon: BookOpen, label: "Moyenne des évaluations", value: `${metricsData.moyenneEvaluations}/10` },
              { icon: Award, label: "Engagement des apprenants", value: `${metricsData.engagementApprenants}/10` }
            ].map((item, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {item.label}
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {item.value}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <div className="flex flex-col lg:flex-row gap-6 mb-8">
                <div className="flex-1 bg-white shadow rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Travailleurs de l&apos;entreprise</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    {workers.map((worker, index) => (
                      <li key={index} className="text-gray-700 flex justify-between items-center">
                        <span>{worker.name}</span>
                        <button
                          onClick={() => setSelectedWorker(worker)}
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-xs"
                        >
                          Voir Plus...
                        </button>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="flex-1 bg-white shadow rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Postes</h3>
                  <div className="max-h-64 overflow-y-auto pr-2">
                    <ul className="space-y-2">
                      {jobs.map((job, index) => (
                        <li key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                          <div className="flex items-center justify-between p-3">
                            <div className="flex items-center">
                              <div className="bg-blue-500 rounded-full p-2 mr-3">
                                <job.icon className="h-4 w-4 text-white" />
                              </div>
                              <span className="text-gray-700">{job.title}</span>
                            </div>
                            <div className="flex space-x-2">
                              <button onClick={() => setSelectedJob(job)} className="text-blue-500 hover:text-blue-600">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button onClick={() => editJob(job)} className="text-yellow-500 hover:text-yellow-600">
                                <Edit2 className="h-4 w-4" />
                              </button>
                              <button onClick={() => deleteJob(index)} className="text-red-500 hover:text-red-600">
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={addJob} className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
                    <Plus className="h-5 w-5 mr-2" />
                    Ajouter un poste
                  </button>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dernier cours généré</h3>
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{latestCourse.title}</h4>
                    <p className="text-sm text-gray-600">Par {latestCourse.author}</p>
                    <p className="text-sm text-gray-600">Généré le {latestCourse.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setShowPdfViewer(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300"
                    >
                      <Eye className="mr-2 h-5 w-5" />
                      Voir PDF
                    </button>
                    <a
                      href={latestCourse.pdfUrl}
                      download
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors duration-300"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Télécharger
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement des experts</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Commentaires" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Progression de la formation</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Tâches" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-96 flex flex-col"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-lg font-semibold">Discuter avec CoGeo</h3>
                  <p className="text-sm">Votre assistant de formation IA</p>
                </div>
                <div className="h-64 overflow-y-auto p-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <Image className="h-10 w-10 rounded-full" src="https://placehold.co/40x40/png" alt="Avatar CoGeo" />
                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                          <Brain className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="ml-3 bg-gray-100 rounded-lg p-3">
                      <p className="text-sm text-gray-900">Bonjour ! Je suis CoGeo, votre assistant de formation IA. Comment puis-je vous aider aujourd&apos;hui ?</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-end">
                    <div className="mr-3 bg-blue-100 rounded-lg p-3">
                      <p className="text-sm text-gray-900">Salut CoGeo ! Peux-tu me parler de ma prochaine tâche de formation ?</p>
                    </div>
                    <div className="flex-shrink-0">
                      <User className="h-10 w-10 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="flex rounded-md shadow-sm">
                    <input
                      type="text"
                      className="flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                      placeholder="Tapez votre message..."
                    />
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="h-5 w-5 mr-2" />
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Statut des tâches</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {selectedWorker && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">{selectedWorker.name}</h3>
            <div className="space-y-4">
              <p><span className="font-semibold text-gray-700">Poste:</span> <span className="text-gray-900">{selectedWorker.position}</span></p>
              <p><span className="font-semibold text-gray-700">Années d&apos;expérience:</span> <span className="text-gray-900">{selectedWorker.experience}</span></p>
              <p><span className="font-semibold text-gray-700">Date de début:</span> <span className="text-gray-900">{selectedWorker.startDate}</span></p>
              <p><span className="font-semibold text-gray-700">Téléphone:</span> <span className="text-gray-900">{selectedWorker.phone}</span></p>
              <p><span className="font-semibold text-gray-700">Email:</span> <span className="text-gray-900">{selectedWorker.email}</span></p>
              <p><span className="font-semibold text-gray-700">Cours générés:</span> <span className="text-gray-900">{selectedWorker.coursesGenerated}</span></p>
            </div>
            <button
              onClick={() => setSelectedWorker(null)}
              className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">{selectedJob.title}</h3>
            <h4 className="text-lg font-semibold mb-4 text-gray-700">Cours créés :</h4>
            <ul className="list-disc list-inside space-y-2">
              {selectedJob.courses.map((course, index) => (
                <li key={index} className="text-gray-900">{course}</li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedJob(null)}
              className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {showPdfViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-4xl h-3/4 shadow-2xl flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{latestCourse.title}</h3>
            <div className="flex-grow overflow-hidden">
              <iframe
                src={latestCourse.pdfUrl}
                className="w-full h-full border-none"
                title="PDF Viewer"
              />
            </div>
            <button
              onClick={() => setShowPdfViewer(false)}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {editingJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Modifier le poste</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
                  Titre du poste
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  value={editingJob.title}
                  onChange={(e) => setEditingJob({...editingJob, title: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="jobIcon" className="block text-sm font-medium text-gray-700">
                  Icône du poste
                </label>
                <select
                  id="job

Icon"
                  value={editingJob.icon.name}
                  onChange={(e) => {
                    const selectedIcon = availableIcons.find(icon => icon.name === e.target.value);
                    setEditingJob({...editingJob, icon: selectedIcon.icon})
                  }}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {availableIcons.map((icon) => (
                    <option key={icon.name} value={icon.name}>
                      {icon.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setEditingJob(null)}
                className="bg-gray-200 text-gray-700 hover:bg-gray-300 font-bold py-2 px-4 rounded-full transition-colors duration-300"
              >
                Annuler
              </button>
              <button
                onClick={saveEditedJob}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
