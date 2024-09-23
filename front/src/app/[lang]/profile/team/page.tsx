
"use client"

import { Separator } from "@/components/shared"
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shared/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/table"
import { Button } from "@/components/shared";
import ProfileSkeleton from "../profile-skeleton";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/userState";
import { useAuthGuard } from "@/components/hooks/use-auth-guard";
import { useRouter } from "next/navigation";
import { InviteButton } from "./components/invite-button";
import QuitButton from "./components/quit-button";
import { Badge } from "@/components/shared/badge";
import { ActionButton } from "./components/action-button";

export default function TeamPage() {
  useAuthGuard();
  const userData = useRecoilValue<any>(userState);
  const [content, setContent] = useState<any>(undefined);
  const [isTeamLeader, setIsTeamLeader] = useState<boolean>(false);
  const router = useRouter();
  
  useEffect(() => {
    const team = userData?.team;
    const isTeamLeader = team?.leader?.id === userData?.id 
    setIsTeamLeader(isTeamLeader);

    if (!team) {
      setContent({
        title: "Vous ne faites pas partie d'une équipe!",
        subtitle: "Assurez-vous de rejoindre une équipe afin que votre candidature soit prise en compte.",
      })
    } else {
      setContent({
        title: isTeamLeader ? "Vous avez créé une équipe!" : "Vous avez rejoint une équipe!",
        subtitle: "Votre candidature sera jointe à celles de vos coéquipiers.",
      })
    }

    // if (!team) {
    //   setContent({
    //     title: "Vous ne faites pas partie d'une équipe!",
    //     subtitle: "Merci pour l'intérêt que vous portez à MTYM! Malheureusement les inscriptions sont désormais closes. Néanmoins, restez à l'écoute pour ne pas manquer de futures opportunités.",
    //   })
    // } else {
    //   setContent({
    //     title: isTeamLeader ? "Vous avez créé une équipe!" : "Vous avez rejoint une équipe!",
    //     subtitle: "Votre candidature sera jointe à celles de vos coéquipiers.",
    //   })
    // }
  }, [userData])

  const applicationCard = (
    <Card>
      <CardHeader>
        <CardTitle>
          {content?.title}
        </CardTitle>
        <CardDescription>
          {content?.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {userData?.team && 
          <>
            <div className="bg-gray-100 rounded-md p-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-black to-stone-600 inline-block text-transparent bg-clip-text">{userData?.team?.name}</div>
              <div className="text-base text-gray-700">{userData?.team?.slogan}</div>
            </div>
            
            <div className="mt-4 p-4">
              <div className="mb-4">
                <span className="font-bold">Membres de l&apos;équipe</span>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Prénom</TableHead>
                      <TableHead>Nom</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead className="text-right"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userData?.team?.users.map((user: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{user?.firstName}</TableCell>
                        <TableCell>{user?.lastName}</TableCell>
                        <TableCell>{user?.email}</TableCell>
                        <TableCell className="flex justify-end">
                          {user?.id === userData?.team?.leader?.id 
                            ? <Badge className="bg-green-700">Lead</Badge>
                            : isTeamLeader
                              ? <ActionButton user={user}/>
                              : ''
                          }
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

                </Table>
              </div>

              <>
                <span className="font-bold">Mentor</span>

                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        {userData?.team?.mentorFullname
                          ? userData?.team?.mentorFullname 
                          : <span className="text-gray-500">(non défini)</span>
                        }
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </>
            </div>
          </>
        }
      </CardContent>
      <CardFooter>
        {(!userData?.application || userData?.application?.status?.status === 'DRAFT')
          ? (
            <>
              <p>Avant que vous puissiez rejoindre une équipe, il faut que vous soumettiez votre candidature:</p>
              <Button
                onClick={() => router.push('/application')}
              >
                Créer votre candidature
              </Button>
            </>
          ) : (
            userData?.team
              ? (
                <div className="flex space-x-4">
                  {isTeamLeader && <InviteButton />}
                  <QuitButton isTeamLeader={isTeamLeader} />
                </div>
              ) : (
                <Button
                  onClick={() => router.push('/team')}
                >
                  Rejoindre une équipe
                </Button>
              )
          )
        }
      </CardFooter>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <div className="text-lg font-medium">Équipe</div>
        <p className="text-sm text-muted-foreground">
          C&apos;est ici que vous trouverez le statut de votre équipe.
        </p>
      </div>

      <Separator />

      {!userData
        ? <ProfileSkeleton />
        : applicationCard
      }
    </div>
  )
}
