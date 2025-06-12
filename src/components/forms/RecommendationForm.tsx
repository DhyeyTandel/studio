"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { wellnessRecommendation, type WellnessRecommendationOutput } from "@/ai/flows/wellness-recommendation";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles, Wand2 } from "lucide-react";
import { services as serviceData } from '@/lib/data'; // Import service data for icons

const formSchema = z.object({
  healthDescription: z.string().min(50, {
    message: "Please provide a detailed description of at least 50 characters.",
  }),
});

export default function RecommendationForm() {
  const { toast } = useToast();
  const [recommendations, setRecommendations] = useState<WellnessRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      healthDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendations(null);
    try {
      const result = await wellnessRecommendation({ healthDescription: values.healthDescription });
      setRecommendations(result);
      toast({
        title: "Recommendations Generated!",
        description: "Your personalized wellness plan is ready.",
      });
    } catch (error) {
      console.error("Error generating recommendations:", error);
      toast({
        title: "Error",
        description: "Could not generate recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const getServiceIcon = (serviceName: string) => {
    const service = serviceData.find(s => s.name.toLowerCase().includes(serviceName.toLowerCase()));
    return service?.Icon;
  };

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-xl">
          <FormField
            control={form.control}
            name="healthDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-headline text-foreground/90">
                  Tell us about your health & lifestyle
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your current health status, lifestyle, any concerns, and wellness goals (e.g., stress levels, sleep patterns, diet, physical activity, specific ailments)."
                    className="resize-none min-h-[200px] bg-background/70 text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-3 rounded-md shadow-md transition-transform hover:scale-105"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Get My Recommendations <Wand2 className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>

      {recommendations && recommendations.recommendations.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-headline text-primary mb-6 text-center">
            <Sparkles className="inline-block h-8 w-8 mr-2 text-accent" />
            Your Personalized Wellness Plan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.recommendations.map((rec, index) => {
               const ServiceIcon = getServiceIcon(rec.service);
               return (
                <Card key={index} className="bg-card/90 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center">
                      {ServiceIcon && <ServiceIcon className="h-10 w-10 text-primary mr-3" />}
                      <CardTitle className="text-2xl font-headline text-primary">{rec.service}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 leading-relaxed">{rec.description}</CardDescription>
                  </CardContent>
                </Card>
               );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
