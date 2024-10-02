'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mic, Pencil, Trash2, Play, Pause, Repeat, Rewind, FastForward, Check, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Comment {
  id: number;
  time: string;
  comment: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export function ExpertVideoReviewComponent() {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, time: "0:15", comment: "Bonne technique utilisée ici." },
    { id: 2, time: "1:30", comment: "Attention à la posture à ce moment." },
    { id: 3, time: "2:45", comment: "Excellente exécution de cette étape." },
  ]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleSave = (id: number) => {
    setComments(comments.map(comment => 
      comment.id === id ? { ...comment, comment: editText } : comment
    ));
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const createParticles = (x: number, y: number, color: string) => {
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push({
        x,
        y,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 - 2,
        size: Math.random() * 3 + 1,
        color,
      });
    }
  };

  const animateParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.size *= 0.95;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();

      if (particle.size < 0.1) {
        particlesRef.current.splice(index, 1);
      }
    });

    animationRef.current = requestAnimationFrame(animateParticles);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    animationRef.current = requestAnimationFrame(animateParticles);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleButtonClick = (color: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    createParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, color);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
      />
      <nav className="flex items-center justify-between p-4 border-b border-gray-200 relative z-20">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg"
            alt="Logo de l'entreprise"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Le Beau Geste de {'{NOM_DE_L\'ENTREPRISE}'}</span>
        </Link>
      </nav>

      <main className="flex-grow p-4 relative z-20">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Bienvenue, John Doe</h1>
          <h2 className="text-xl mt-2">Tâche : Soudure TIG</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Lecteur vidéo personnalisé</span>
            </div>
            <div className="flex justify-center space-x-4">
              <div className="flex flex-col items-center">
                <Button variant="outline" size="icon" title="Reculer de 5 secondes" onClick={handleButtonClick('#3498db')}>
                  <Rewind className="w-4 h-4" />
                  <span className="sr-only">Reculer de 5 secondes</span>
                </Button>
                <span className="text-xs mt-1">-5s</span>
              </div>
              <div className="flex flex-col items-center">
                <Button variant="outline" size="icon" title="Lecture" onClick={handleButtonClick('#2ecc71')}>
                  <Play className="w-4 h-4" />
                  <span className="sr-only">Lecture</span>
                </Button>
                <span className="text-xs mt-1">Lecture</span>
              </div>
              <div className="flex flex-col items-center">
                <Button variant="outline" size="icon" title="Pause" onClick={handleButtonClick('#e74c3c')}>
                  <Pause className="w-4 h-4" />
                  <span className="sr-only">Pause</span>
                </Button>
                <span className="text-xs mt-1">Pause</span>
              </div>
              <div className="flex flex-col items-center">
                <Button variant="outline" size="icon" title="Avancer de 5 secondes" onClick={handleButtonClick('#f39c12')}>
                  <FastForward className="w-4 h-4" />
                  <span className="sr-only">Avancer de 5 secondes</span>
                </Button>
                <span className="text-xs mt-1">+5s</span>
              </div>
              <div className="flex flex-col items-center">
                <Button variant="outline" size="icon" title="Rejouer" onClick={handleButtonClick('#9b59b6')}>
                  <Repeat className="w-4 h-4" />
                  <span className="sr-only">Rejouer</span>
                </Button>
                <span className="text-xs mt-1">Rejouer</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button className="flex items-center space-x-2">
                <Mic className="w-4 h-4" />
                <span>Commenter</span>
              </Button>
              <Input type="text" placeholder="Ajouter un commentaire..." className="flex-grow" />
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Commentaires de l'expert</h2>
            <ul className="space-y-4">
              {comments.map((item) => (
                <li key={item.id} className="flex items-start justify-between">
                  {editingId === item.id ? (
                    <div className="flex-grow mr-2">
                      <Input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full"
                      />
                    </div>
                  ) : (
                    <div>
                      <span className="font-bold">{item.time}</span> - {item.comment}
                    </div>
                  )}
                  <div className="flex space-x-2">
                    {editingId === item.id ? (
                      <>
                        <Button variant="outline" size="icon" onClick={() => handleSave(item.id)}>
                          <Check className="w-4 h-4" />
                          <span className="sr-only">Sauvegarder</span>
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => setEditingId(null)}>
                          <X className="w-4 h-4" />
                          <span className="sr-only">Annuler</span>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" size="icon" onClick={() => handleEdit(item.id, item.comment)}>
                          <Pencil className="w-4 h-4" />
                          <span className="sr-only">Modifier</span>
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => handleDelete(item.id)}>
                          <Trash2 className="w-4 h-4" />
                          <span className="sr-only">Supprimer</span>
                        </Button>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}