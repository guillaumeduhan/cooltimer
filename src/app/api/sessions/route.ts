import supabase from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body) {
      return new NextResponse("Missing body", {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    const {
      id,
      ip,
      network,
      version,
      city,
      region,
      region_code,
      country,
      country_name,
      country_code,
      continent_code,
      postal,
      latitude,
      longitude,
      timezone,
      utc_offset,
      currency,
      org,
      display_name,
      email,
      position,
      created_at,
      ...rest
    } = body;

    const response = await fetch('https://www.guillaume.ceo/api/telegram', {
      method: 'POST',
      body: `🥷 Timer.cool — New user from ${country_name}`
    });


    const { data, error } = await supabase
      .from('sessions')
      .insert({
        id,
        ip,
        network,
        version,
        city,
        region,
        region_code,
        country,
        country_name,
        country_code,
        continent_code,
        postal,
        latitude,
        longitude,
        timezone,
        utc_offset,
        currency,
        org,
        display_name,
        email,
        position,
        created_at
      })
      .single();

    if (error) throw error;
    return new NextResponse(JSON.stringify(data), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error posting new session:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to post new session' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
