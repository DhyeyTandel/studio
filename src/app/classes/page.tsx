"use client";
import React, { useState } from 'react';
import { classesInfo } from '@/lib/data';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import Image from 'next/image';
import { CalendarDays, Clock, User, Tag } from 'lucide-react';
import Link from 'next/link';

export default function ClassesPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Filter classes for the selected date (example logic, adjust as needed)
  const dayOfWeek = date ? date.toLocaleDateString('en-US', { weekday: 'long' }) : '';
  const todaysClasses = classesInfo.filter(cls => 
    cls.schedule.some(s => s.day === dayOfWeek)
  );

  return (
    <div className="space-y-12">
      <PageHeader
        title="Our Wellness Classes"
        subtitle="Join our enriching classes designed to cultivate balance, strength, and inner peace. Find the perfect session to support your wellness journey."
        Icon={CalendarDays}
      />

      <div className="flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 md:items-start">
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-2xl font-headline text-primary">Select a Date</h2>
          <Card className="shadow-lg">
            <CardContent className="p-0">
               <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md w-full"
              />
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            Select a date to see available classes. Full booking functionality coming soon!
          </p>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-headline text-primary">
            {date ? `Classes for ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}` : "Upcoming Classes"}
          </h2>
          {todaysClasses.length > 0 ? (
            todaysClasses.map((cls) => (
              <Card key={cls.id} className="shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row">
                 <div className="md:w-1/3">
                  <Image src={cls.image} alt={cls.name} width={300} height={200} className="object-cover h-full w-full rounded-l-md" data-ai-hint={cls.dataAiHint} />
                </div>
                <div className="md:w-2/3 flex flex-col">
                  <CardHeader>
                    <div className="flex items-center mb-1">
                      {cls.Icon && <cls.Icon className="h-7 w-7 text-primary mr-2" />}
                      <CardTitle className="text-xl font-headline text-primary">{cls.name}</CardTitle>
                    </div>
                     <div className="flex items-center text-xs text-muted-foreground">
                        <User className="h-3 w-3 mr-1" /> {cls.instructor}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm text-foreground/80 leading-relaxed line-clamp-2">{cls.description}</CardDescription>
                     <div className="mt-3 space-y-1">
                      {cls.schedule.filter(s => s.day === dayOfWeek).map(sch => (
                        <div key={sch.time} className="flex items-center text-sm text-accent">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{sch.day}, {sch.time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                      <Link href={`/contact?class=${cls.id}`}>Request to Book</Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-6 text-center shadow-md">
              <CardTitle className="text-xl font-headline text-muted-foreground">No classes scheduled for this day.</CardTitle>
              <CardDescription className="text-foreground/70 mt-2">Please select another date or check our full schedule.</CardDescription>
            </Card>
          )}

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-xl font-headline text-primary mb-4">All Classes Overview</h3>
             <div className="grid sm:grid-cols-2 gap-4">
              {classesInfo.map(cls => (
                <Card key={cls.id} className="p-4 bg-card/70 shadow-sm">
                  <div className="flex items-center mb-1">
                    {cls.Icon && <cls.Icon className="h-5 w-5 text-primary mr-2" />}
                    <h4 className="font-semibold text-primary">{cls.name}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">With {cls.instructor}</p>
                  <div className="text-xs text-accent">
                    {cls.schedule.map(s => `${s.day.substring(0,3)} ${s.time.split(' - ')[0]}`).join(' / ')}
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
